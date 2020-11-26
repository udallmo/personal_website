import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../../resources/ss.jpg'
import logo1 from '../../resources/cc.png'
import logo2 from '../../resources/sl.png'
import logo3 from '../../resources/mm.png'
import logo4 from '../../resources/bb.jpg'
import logo5 from '../../resources/sen.jpeg'
import logo6 from '../../resources/gg.png'
import logo7 from '../../resources/ff.png'




class MediaCard extends Component {
    render() {

        const images = [logo,logo1, logo2, logo3, logo4,logo5,logo6,logo7];

        const classes = makeStyles({
            root: {
              width: 400
            },
            media: {
              height: 140,
            },
        });

        return (
          <Card className={classes.root} style={{width: "320px", height: "390px", margin: "3vh 4vh 0 4vh", textAlign:"justify"}}>
            <CardActionArea>
            <img height="180px" width="100%" src={images[this.props.order]} alt={"image"}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.info.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.info.desc}
                  <div className="tag-container">
                    {this.props.info.tags.map((item)=>{
                      return(<span className="tags" key={item.id}>{item.toUpperCase()}</span>)
                    })}
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a target="_blank" href={this.props.info.git}>Learn More</a>
              </Button>
              {this.props.info.url ?
              <Button size="small" color="primary" >
                Check out
              </Button> : null}
            </CardActions>
          </Card>
        );
    }
}

export default MediaCard
