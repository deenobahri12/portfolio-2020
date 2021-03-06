import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardText } from 'react-mdl';
import './../style/projects.css'
import debate from './../assets/settle-it.jpg'
import office from './../assets/the-office.jpg'
import books from './../assets/books.jpg'
import DBZ from './../assets/dbz-game.jpg'



class Projects extends Component {
    render() {
        return(
            <Grid>
                
             <Card className='appCard' shadow={0}>
    <CardTitle expand className='app1' style={{backgroundImage:`url(${office})`}}></CardTitle> 
    <CardTitle className='card-title'>The Office Quiz</CardTitle>
    {/* <CardText> */}
        <p>Technology used: Javascript | HTML/CSS </p>
    {/* </CardText> */}
    <CardActions border>
        <Button id='appLinks' target='_blank' href="https://deenobahri12.github.io/Quiz/" colored><img src="https://img.icons8.com/android/30/000000/domain.png"/>Site</Button>
        <Button id='appLinks' target='_blank' href="https://github.com/deenobahri12/Quiz" target="_blank" colored><img src="https://img.icons8.com/ios-filled/30/000000/github.png"/>Github</Button>
    </CardActions>
</Card>

<Card className='appCard' shadow={0}>
    <CardTitle expand className='app1' style={{backgroundImage:`url(${debate})`}}></CardTitle> 
    <CardTitle className='card-title'>Settle It!</CardTitle>
    {/* <CardText> */}
        <p>Technology used: Passport | MySQL | Javascript | HTML/CSS</p>
    {/* </CardText> */}
    <CardActions border>
        <Button id='appLinks' target='_blank' href="https://settle-it.herokuapp.com/" colored><img src="https://img.icons8.com/android/30/000000/domain.png"/>Site</Button>
        <Button id='appLinks' target='_blank' href="https://github.com/deenobahri12/Settle-It" target="_blank" colored><img src="https://img.icons8.com/ios-filled/30/000000/github.png"/>Github</Button>
    </CardActions>
</Card>

<Card className='appCard' shadow={0}>
    <CardTitle expand className='app1' style={{backgroundImage:`url(${books})`}}></CardTitle> 
    <CardTitle className='card-title'>Find That Book</CardTitle>
    {/* <CardText> */}
        <p>Technology used: React.js | HTML/CSS | MongoDB</p>
    {/* </CardText> */}
    <CardActions border>
        <Button id='appLinks' target='_blank' href="https://thawing-island-97264.herokuapp.com/" colored><img src="https://img.icons8.com/android/30/000000/domain.png"/>Site</Button>
        <Button id='appLinks' target='_blank' href="https://github.com/deenobahri12/book-finder" target="_blank" colored><img src="https://img.icons8.com/ios-filled/30/000000/github.png"/>Github</Button>
    </CardActions>
</Card>

<Card className='appCard' shadow={0}>
    <CardTitle expand className='app1' style={{backgroundImage:`url(${DBZ})`}}></CardTitle> 
    <CardTitle className='card-title'>DBZ Game</CardTitle>
    {/* <CardText> */}
        <p>Technology used: React.js | HTML/CSS</p>
    {/* </CardText> */}
    <CardActions border>
        <Button id='appLinks' target='_blank' href="https://deenobahri12.github.io/React-Click-app/" colored><img src="https://img.icons8.com/android/30/000000/domain.png"/>Site</Button>
        <Button id='appLinks' target='_blank' href="https://github.com/deenobahri12/React-Click-app" target="_blank" colored><img src="https://img.icons8.com/ios-filled/30/000000/github.png"/>Github</Button>
    </CardActions>
</Card>

            </Grid>
         )
    }
}

export default Projects;