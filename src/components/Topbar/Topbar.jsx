import React from 'react'
import IndiaTime from './IndiaTime'
import Mysvga from './Cellular Connection.svg'
import Mysvgb from './Battery.svg'
import Mysvgc from './Wifi.svg'

function Topbar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <IndiaTime />
      <div style={{ display: 'flex' }}> {/* Flex container for SVGs */}
        <img src={Mysvga} alt="hi" style={{ marginRight: '10px' }} />
        <img src={Mysvgb} alt="hi" style={{ marginRight: '10px' }}/>
        <img src={Mysvgc} alt="hi" />
      </div>
    </div>
  )
}

export default Topbar
