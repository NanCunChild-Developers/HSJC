import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './home.styl'
import Img_OpenAI from '../../resources/imgs/openai-logos/SVGs/openai-lockup.svg'
import Img_CloudDrive from '../../resources/imgs/CloudDrive.svg'
import Img_RifleRange from '../../resources/imgs/RifleRange.svg'
import Img_Minecraft from '../../resources/imgs/MinecraftSev.svg'

const defaultTheme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        XDU HaiSan Geek Team
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function SigleFucCard(props) {
  const { imageUrl, imageAlt, title, description, linkTo } = props;

  return (
    <Card sx={{
      minWidth: 275,
      minHeight: 480,
      transition: 'box-shadow 0.3s ease-in-out',
      '&:hover': {
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
      },
    }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          {/* 图片 */}
          <Grid item xs={12} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 240,
          }}>
            <img src={imageUrl} alt={imageAlt} style={{ width: '60%' }} />
          </Grid>
          {/* 标题 */}
          <Grid item xs={12}>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
          </Grid>
          {/* 介绍 */}
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" component="div">
              <CardActions variant="contained" color="primary">
                <Button href={linkTo}>了解更多-{'>'}</Button>
              </CardActions>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}



export default function Home() {
  const cardData = [
    {
      imageUrl: Img_OpenAI,
      imageAlt: "OpenAI",
      title: "OpenAI 系列",
      description: "OpenAI 是一个非营利性人工智能研究公司，致力于促进人工智能的友好发展。其主要产品包括 GPT-3、CLIP、DALL·E 等。我们使用了API接口，为您提供了一些有趣的应用。",
      linkTo: "/openai"
    },
    {
      imageUrl: Img_CloudDrive,
      imageAlt: "云盘",
      title: "云盘服务",
      description: "我们为您提供了云盘服务，您可以在这里存储您的数据，也可以分享给他人。相比于百度等云盘，下载速度不被限制。同时使用企业级硬盘和RAID5阵列，保证您的数据安全。",
      linkTo: "/cloud-drive"
    },
    {
      imageUrl: Img_RifleRange,
      imageAlt: "网络安全靶场",
      title: "网络安全靶场",
      description: "网络安全靶场是一个模拟真实网络环境的虚拟网络空间，它是网络安全人员进行网络攻防实战训练的场所。我们提供了一些常见的网络安全靶场，供您进行实战训练。",
      linkTo: "/rifle-range"
    },
    {
      imageUrl: Img_Minecraft,
      imageAlt: "Minecraft 服务器",
      title: "Minecraft 服务器",
      description: "Minecraft 是一款沙盒游戏，我们为您提供了一个内网服务器，您可以在这里和您的朋友一起玩耍。目前服务器版本为1.20.0，支持非正版用户。同时用户隔离技术来保证账户不会被盗用。",
      linkTo: "/minecraft"
    },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="P-home">
        <h1>HaiSan JiChuang Temp Home Page</h1>
      </div>
      <Grid container spacing={4} sx={{ margin: '0 auto', maxWidth: 1200 }}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} lg={3} md={6}>
            <SigleFucCard
              imageUrl={card.imageUrl}
              imageAlt={card.imageAlt}
              title={card.title}
              description={card.description}
              linkTo={card.linkTo}
            />
          </Grid>
        ))}
      </Grid>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </ThemeProvider>
  );
}
