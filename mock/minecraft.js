const fs = require('fs');
const WebSocket = require('ws');

// 读取文件路径
const logFilePath = 'N:\\Install.txt';

// 创建WebSocket服务器
const wss = new WebSocket.Server({ port: 1980 });

// 处理WebSocket连接事件
wss.on('connection', (ws) => {
  console.log('WebSocket连接已建立');

  // 监听文件变化，实时推送日志内容到前端
  const watcher = fs.watch(logFilePath, { encoding: 'utf-8' }, (eventType, filename) => {
    // if (eventType === 'change' && filename === 'latest.log') {
      // 文件发生变化，读取文件内容并发送到前端
      fs.readFile(logFilePath, 'utf-8', (err, data) => {
        if (err) {
          console.error('读取文件失败:', err);
        } else {
          // 将文件内容发送到前端
          ws.send(data);
        }
      });
    // }
  });

  // 处理WebSocket断开连接事件
  ws.on('close', () => {
    console.log('WebSocket连接已关闭');
    // 关闭文件监视器
    watcher.close();
  });
});

console.log('WebSocket服务器已启动，监听端口 1980');