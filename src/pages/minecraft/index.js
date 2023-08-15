import React, { useState, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import './minecraft.styl'
import Img_Minecraft from '../../resources/imgs/MinecraftSev.svg'

const defaultTheme = createTheme();

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" marginTop={12} {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                XDU HaiSan Geek Team
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function ConsoleWebSocket() {
    const [consoleMessage, setConsoleMessage] = useState(""); // 状态变量用于存储控制台消息
    const socketRef = useRef(null);
  
    useEffect(() => {
      // 创建WebSocket连接
      socketRef.current = new WebSocket('ws://nancunchild.top:1980');
  
      // 处理WebSocket连接打开事件
      socketRef.current.onopen = () => {
        console.log('WebSocket连接已打开');
        console.log(socketRef.current);
      };
  
      // 处理WebSocket接收到消息事件
      socketRef.current.onmessage = (event) => {
        const content = event.data;
        console.log('接收到文件内容:', content);
  
        // 将接收到的消息添加到控制台消息中
        setConsoleMessage((prevMessage) => prevMessage + content + "\n");
      };
  
      // 处理WebSocket连接关闭事件
      socketRef.current.onclose = () => {
        console.log('WebSocket连接已关闭');
      };
  
      return () => {
        // 在组件卸载时关闭WebSocket连接
        if (socketRef.current) {
          socketRef.current.close();
        }
      };
    }, []);
  
    return (
      <textarea
        style={{ width: '98%', height: '420px' }}
        value={consoleMessage}
        rows={10}
        disabled
      />
    );
  }

export default function Minecraft(props) {
    return (
        < ThemeProvider theme={defaultTheme} >
            <div className='P-minecraft'>
                <h1>Minecraft 服务器</h1>
            </div>

            <Grid container spacing={3} justifyContent="center" sx={{ margin: '0 auto', maxWidth: 1600 }}>
                {/* 左侧 */}
                <Grid item xs={5}>
                    <Card style={{ minHeight: 480 }}>
                        <div style={{ margin: "10px 0px 10px 20px" }}>
                            <Typography variant="h4" component="div">
                                服务器地址：192.168.31.201:1997
                            </Typography>
                            {/* 服务器介绍部分 */}
                            <div className='P-minecraft-intro'>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={2}><img src={Img_Minecraft} alt='Minecraft' style={{ width: '100px' }} /><br /></Grid>
                                    <Grid item xs={9}>
                                        <div>
                                            服务器版本：1.20.0<br />
                                            服务器类型：Java版<br />
                                            服务器模式：纯净生存<br />
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container alignItems="center">
                                    <Grid item xs={12}><br />
                                        <div style={{ fontSize: 18 }}>
                                            注意：服务器为内网服务器，只能在海三极创内访问<br />
                                            若要在校园网范围内访问，请关注群内发布的最新IP地址<br />
                                            若要在校园网范围外访问，请使用校园网VPN<br />
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Card>
                    {/* 在这里放置服务器介绍的内容 */}
                </Grid>

                {/* 右侧 */}
                <Grid item xs={5}>
                    <Card style={{ minHeight: 480 }}>
                        {/* 控制台部分 */}
                        控制台消息：<br />
                        <ConsoleWebSocket />
                    </Card>
                    {/* 在这里放置控制台的内容 */}
                </Grid>
            </Grid>
            <Copyright />
        </ThemeProvider >
    )
}