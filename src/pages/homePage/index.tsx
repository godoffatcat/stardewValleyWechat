import Taro from '@tarojs/taro'
import React, { Component,  useState, useEffect  } from 'react'
import { View, Button, Text } from '@tarojs/components'

function Home() {
  const [state, setState] = useState({
    pic: ''
  })

  return (
    <view>
      <view className='.title'>happy menu</view>
      <Button className='.happyBtn' onClick={() => {Taro.navigateTo({url: 'pages/menuPage/index'})}}>to menu</Button>
    </view>
  )
}

export default Home
