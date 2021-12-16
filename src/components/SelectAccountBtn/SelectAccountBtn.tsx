import React, { MouseEventHandler } from 'react'
import { useNavigate } from 'react-router';
import { ROUTES } from '../../const/routeNames';
import { ContextMain } from '../../context/store';
import './SelectAccountBtn.scss';

interface Props {
}

const SelectAccountBtn = (props : Props) => {

    const [ state, dispatch ] = React.useContext(ContextMain)

    return (
        <>
          <a className='select-act'>
              <img className='select-act__img' src="./assets/account-1.png" alt="" />
              <p className='select-act__name' > Testaccount.near </p>
              <img className='select-act__chevron' src="./assets/chevron-down.png" alt="" />                                            
          </a>
        </>
    )
}

export default SelectAccountBtn
