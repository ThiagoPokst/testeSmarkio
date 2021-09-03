import React, { useState, useEffect } from 'react';

import ReactAudioPlayer from 'react-audio-player';

import { Container, Grid, TextField, Button, Typography, Divider, Hidden, Card, CardContent, CardActions, Paper, Box, LinearProgress, Fade } from '@material-ui/core';
import { Delete, Hearing, Forward, Refresh } from '@material-ui/icons';
import useStyles from './styles';

import api from '../../services/axiosConfig';

export default function Screen() {
  const [session, setSession] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [audioSource, setAudioSource] = useState('');
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  async function handleListenComment(commentText, commentId) {
    setLoading(true);
    const sessionStorageObject = {
      commentId: commentId,
    };

    const storagedBase64Audio = sessionStorage.getItem(JSON.stringify(sessionStorageObject));
    if(storagedBase64Audio) {
      const array = Buffer.from(storagedBase64Audio, 'base64');
      const blob = new Blob([array], {type: 'audio/wav'})
      const objecturl = URL.createObjectURL(blob);
      setAudioSource(objecturl);

    } else {
      try {
        const response = await api.post(`synthesize`, {
          text: commentText,
        });
        const array = Buffer.from(response.data.base64Audio, 'base64');
        const blob = new Blob([array], {type: 'audio/wav'})
        const objecturl = URL.createObjectURL(blob);

        sessionStorage.setItem(JSON.stringify(sessionStorageObject), response.data.base64Audio);
        setAudioSource(objecturl);
      } catch(error) {
        alert('Não foi possivel sintetizar seu comentário.');
      }
    }
    setLoading(false);
  };

  return (
    <Container>
      <Paper className={classes.PaperStyle} square={true}>
        <Container>
        <Grid container>
          <Grid item xs sm/>
          <Grid container item xs={12} sm={12}>
            <Grid className={classes.FullGridStyle} container item xs={12}> 
            </Grid>
            <Grid item xs={12} sm={5} md={5}>
              <TextField
                className={classes.SessionInputStyle}
                type="text"
                label="ID da Sessão"
                color="secondary"
                size="small"
                value={session}
                onChange={e => setSession(e.target.value)}
              />             
              <form onSubmit={handleNewComment}>
                <TextField
                  className={classes.FormStyle}
                  id="standard-textarea"
                  type="text"
                  label="Comentário"
                  placeholder="Digite um comentário..."
                  multiline
                  variant="outlined"
                  color="secondary"
                  fullWidth={true}
                  rows={5}
                  value={comment} 
                  onChange={e => setComment(e.target.value)}
                />
                <Button
                  className={classes.FormButtonStyle}
                  variant="contained"
                  color="primary"
                  fullWidth={true}
                  type="submit"
                >
                  Cadastrar
                </Button>
              </form>
              <Box 
                className={classes.AudioPlayerStyle} 
                autoPlay={true} 
                component={ReactAudioPlayer} 
                controls={true} 
                src={audioSource}
              />
              <Fade
                in={loading}
                style={{
                  transitionDelay: loading ? '800ms' : '0ms',
                }}
                unmountOnExit
              >
                <LinearProgress className={classes.LinearProgressStyle} color="primary"/>
              </Fade>
            </Grid>
            <Hidden xsDown>
              <Grid container item className={classes.DividerStyle} xs sm={1} md={2}>
                <Divider orientation="vertical"/>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Hidden>
            <Grid item className={classes.CommentAreaStyle} xs={12} sm={6} md={5}>
              {comments.map(comment => (
                <Card key={comment.id} className={classes.CardStyle} variant="outlined">
                  <CardContent className={classes.CardContentStyle}>
                    <Typography color="textSecondary" gutterBottom>
                      {comment.text}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.CardActionStyle}>
                    <Button
                      className={classes.CardActionButtonStyle}
                      variant="contained"
                      color="primary"
                      size="small"
                      startIcon={<Hearing/>}
                      onClick={() => handleListenComment(comment.text, comment.id)}
                    >
                      Ouvir
                    </Button>
                  
                  </CardActions>
                </Card>
              ))}
            </Grid>
          </Grid>
          <Grid item xs sm/>
        </Grid>
        </Container>
      </Paper>
    </Container>
  );
};