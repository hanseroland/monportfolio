import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useApexInfoStyles } from '@mui-treasury/styles/info/apex';
import { useGraphicBtnStyles } from '@mui-treasury/styles/button/graphic';


const useStyles = makeStyles(() => ({
  root: {
    height: '250px',
    transition: '0.3s',
    position: 'relative',
    '&:before': {
      transition: '0.2s',
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
     // backgroundColor: '#d9daf1',
      borderRadius: '1rem',
      zIndex: 0,
      bottom: 0,
    },
    '&:hover': {
      '&:before': {
        bottom: -6,
      },
      '& $card': {
        //boxShadow: '-12px 12px 64px 0 #1DA84E',
        borderBottom :'5px solid #00B0FF',
        //backgroundColor:'#1DA84E',
      },
    },
  },
  card: {
    zIndex: 1,
    position: 'relative',
    borderRadius: '1rem',
    boxShadow: '0 6px 20px 0 #000',
   // backgroundColor: '#fff',
    transition: '0.4s',
    height: '100%',
    borderBottom :'5px solid #1DA84E',
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: '0.75rem',
  },
  avatar: {
   
    fontSize: '0.875rem',
    backgroundColor: '#6d7efc',
  },
  join: {
    background: 'linear-gradient(to top, #638ef0, #82e7fe)',
    '& > *': {
      textTransform: 'none !important',
    },
  },
}));

const CustomCard = ({
  thumbnail,
  title,
  subtitle,
  description,
  joined = false,
}) => {
  const styles = useStyles();
  const btnStyles = useGraphicBtnStyles();
  return (
    <div className={styles.root}>
      <Column className={styles.card}>
        <Row p={2} gap={2}>
          <Avatar className={styles.logo} variant={'rounded'} src={thumbnail} />
          <Info position={'middle'} useStyles={useApexInfoStyles}>
            <InfoTitle  style={{color:'#1DA84E'}} >{title}</InfoTitle>
            <InfoSubtitle>{subtitle}</InfoSubtitle>
          </Info>
        </Row>
        <Box
          pb={1}
          px={2}
          color={'#fff'}
          fontSize={'0.875rem'}
        >
          {description}
        </Box>
        
      </Column>
    </div>
  );
};

export const TeamCardDemo = React.memo(function TeamCard(props) {
  const styles3 = useStyles({ color: `${props.iconColor}` });
  return (
    <>
     
          <CustomCard
            thumbnail={props.logo}
            title={props.titre}
            subtitle={props.soustitre}
            description={
              <>
                {props.description}
              </>
            }
          />
       
    </>
  );
});
export default TeamCardDemo