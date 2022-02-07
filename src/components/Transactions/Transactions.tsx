import React, { useState } from 'react';
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
  sender: `/assets/direction-sent.svg`,
  receiver: '/assets/direction-receive.svg',
};

const Transactions = () => {
  const userId = getUserIdFromToken();
  const { data, isLoading } = useGetTransactionsByUserId(userId);
  const [tabs, setTabs] = useState(TABS);

  const handleTabClick = (id: number) => setTabs((prevState) => {
    return prevState.map((el, idx) => {
      el.active = idx === id;
      return el;
    });
  });

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
        {data?.map((item) => (
          <div className={clsx('transaction', {
          'transaction--sender': item.sender,
          'transaction--receiver': !item.sender,
        })}>
            <div className="transaction__icon-direction">
              <img src={item.sender ? ICONS.sender : ICONS.receiver} alt="direction" />
            </div>
            <div className="transaction__main-info">
              <div className="transaction__main-info__amount">0.456 NEAR</div>
              <div className="transaction__main-info__action">
                <span>Sent to</span>
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
