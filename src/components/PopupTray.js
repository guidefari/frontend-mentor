import React from 'react'
import PropTypes from "prop-types";
import { FaShare } from "react-icons/fa";
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const PopupTray = ({children}) => {
    return (
        <div className='inline mx-auto'>
            <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
            <button {...bindTrigger(popupState)} className='flex flex-col items-center justify-center w-8 h-8 rounded-full bg-grayish-blue focus:outline-none'>
                <FaShare className='inline mx-auto'/>
            </button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
          >
            <Box className='w-40 bg-dark-grayish-blue' p={2}>
              {children}
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>

        </div>
    )
}

PopupTray.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PopupTray
