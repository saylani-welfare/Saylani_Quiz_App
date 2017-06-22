import React from 'react';
import Android from '../images/Android.png';
import Angular from '../images/Angular.jpg';
import ReactLogo from '../images/react.png';
import CCNA from '../images/ccna.png';
import profile from '../images/profile.png';
import exam from '../images/exam.png';
import './main.css'
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


class StudentDetail extends React.Component {
    render() {
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                marginTop: '10px'
            },
            gridList: {
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                marginTop: '10px'

            },
            titleStyle: {
                color: 'rgb(0, 188, 212)',
                display: 'flex',
                justifyContent: 'space-around'
            },
        };

        const tilesData = [
            {
                img: Android,
                title: 'Android',
                author: 'Android',
            },
            {
                img: Angular,
                title: 'Angular',
                author: 'Angular',
            },
            {
                img: CCNA,
                title: 'CCNA',
                author: 'ccna',
            },
            {
                img: ReactLogo,
                title: 'React',
                author: 'React',
            },
        ];



        const style = {
            // 
        }
        return (
            <div style={{ minHeight: "800px" }}>


                <header>
                    <div className="container" id="maincontent" >
                        <div className="row">
                            <div className="col-lg-12">
                                <br />
                                <img className="img-responsive" src={exam} alt="quiz" style={{borderRadius:"100px",imageSize:"20px"}} />
                                <div className="intro-text">
                                    <h1 className="name">Let's Quiz</h1>
                                    <hr className="star-light" />

                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>what we teach</h2>
                                <hr className="star-primary" />
                            </div>
                        </div>
                        <div className="row">
                            {tilesData.map((v) => {
                                return (
                                    <div className="col-sm-4 portfolio-item" key={v.img}>
                                        <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                                            <div className="caption">
                                                <div className="caption-content">
                                                    <i className="fa fa-search-plus fa-3x"></i>
                                                </div>
                                            </div>
                                            <img src={v.img}  />
                                        </a>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </section>
                <div>
                    <footer className="text-center">

                        <div className="footer-below">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                       made by saylani
                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

                {/*<div style={styles.root}>
                    
                    <GridList style={styles.gridList} cols={0.5}>
                        {tilesData.map((tile) => (
                            <GridTile
                                key={tile.img}
                                title={tile.title}
                                actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                                titleStyle={styles.titleStyle}
                                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                            >
                                <img src={tile.img} />
                            </GridTile>
                        ))}
                    </GridList>
                </div>*/}


            </div>
        )
    }
}
export default StudentDetail;