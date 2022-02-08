import React, { useEffect, useState } from 'react';
import moment from 'moment';
import clsx from 'classnames';

import { getUserIdFromToken } from '../../utils/utils';
import { useGetTransactionsByUserId } from '../../hooks/api/transactions';

import './Transactions.styles.scss';

const TABS = [
  { name: 'all', active: true },
  { name: 'sent', active: false },
  { name: 'received', active: false }
];
const ICONS = {
  sender: `/assets/svg/direction-sent.svg`,
  receiver: '/assets/svg/direction-receive.svg',
};

const Transactions = () => {
  const userId = getUserIdFromToken();
  const [tabs, setTabs] = useState(TABS);
  const { data, isLoading } = useGetTransactionsByUserId(userId);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (data) {
      const activeTab = tabs.find((item) => item.active)?.name;
      if (activeTab === 'sent') {
        setFilteredData(data.filter((item) => item.sender));
      } else if (activeTab === 'received') {
        setFilteredData(data.filter((item) => !item.sender));
      } else {
        setFilteredData(data);
      }
    }
  }, [data, tabs]);

  const handleTabClick = (id: number) => setTabs((prevState) => {
    return prevState.map((el, idx) => {
      el.active = idx === id;
      return el;
    });
  });

  const renderActionMsg = (item: any) => {
    let msg = item.sender ? 'Send to' : 'Received from';
    if (item.type === 'create_wallet') {
      msg = 'Wallet has been created';
    } else if (item.type === 'create_nft_series') {
      msg = 'NFT series has been created';
    }
    return <span>{`${msg} `}</span>;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="transactions">
      <div className="transactions__filter">
        {tabs.map((tab, idx) => (
          <button
            className={clsx('transactions__filter__btn', {
              'transactions__filter__btn--active': tab.active,
            })}
            onClick={() => handleTabClick(idx)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="transactions__list">
        {filteredData?.map((item) => (
          <div key={item.id} className={clsx('transaction', {
          'transaction--sender': item.sender,
          'transaction--receiver': !item.sender,
        })}>
            <div className="transaction__icon-direction">
              <img src={item.sender ? ICONS.sender : ICONS.receiver} alt="direction" />
            </div>
            <div className="transaction__main-info">
              <div className="transaction__main-info__amount">
                <a
                  href={`/nft/${item.transaction_item_id}`}
                >
                  {`#${item.transaction_item_id}`}
                </a>
              </div>
              <div className="transaction__main-info__action">
                {renderActionMsg(item)}
                <span className="transaction__main-info__counterparty">
                  {item.counterparty?.[0]?.email
                    ? item.counterparty?.[0]?.email
                    : item.counterparty?.[0]?.phone}
                </span>
              </div>
            </div>
            <div className="transaction__date">
              {moment
                .utc(item.created)
                .local()
                .startOf('seconds')
                .fromNow()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
