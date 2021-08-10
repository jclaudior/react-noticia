import React from 'react';
import Noticia from '../../../Model/Noticia';
import Moment from 'react-moment';
import api from '../../../Service/NoticiaService';
import { Grid, Paper, Card, CardActionArea, CardContent, Typography, CardActions, Button, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            margin: '0 auto',
            textAlign: 'center',
            color: theme.palette.text.secondary,
            maxWidth: 300,
        },
        rootCard: {
            maxWidth: 300,
        },
        media: {
            height: 100,
        },
    }),
);

const Listar: React.FC = () => {

    const classes = useStyles();
    const defaultNoticias: Noticia[] = [];

    const [noticias, setNoticias]: [Noticia[], (noticias: Noticia[]) => void] = React.useState(
        defaultNoticias
    );

    React.useEffect(() => {
        api.get('')
            .then((response) => {
                setNoticias(response.data);
                console.log(response.data);
            });


    }, []);

    return <div>
        <Grid container spacing={3}>
            {noticias.map(noticia => {
                return <Grid item xs>
                    <Paper className={classes.paper}>
                        <Card className={classes.rootCard}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {noticia.titulo}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {noticia.conteudo}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <Moment format="DD/MM/YYYY">{noticia.data}</Moment>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={()=>{deletarNoticia(noticia)}}>
                                    Deletar
        </Button>
                                <Button size="small" color="primary">
                                    Alterar
        </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>

            })}


        </Grid>
    </div>;
}

function deletarNoticia(noticia: Noticia){
    api.delete('', { data: noticia })
            .then((response)=>{
                console.log(response)
                window.location.reload();
            }
            );
            
            
}

export default Listar;