import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return (
      <div className="container">
            <Head>
              <title>Sarah Marie Coogan</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container" id="home">
              <div className="name-blast">Sarah Marie Coogan</div>
              <p className="job-title">Software Engineer</p>
              <div className="hello-world">
              Hello! I am Sarah Marie: Chicago based, full-stack web developer and 
              software engineer with a versatile background in Philosophy, graphic 
              design, and team management. My superpowers included: problem solving 
              under pressure, hyper attention to detail, and communicating complex 
              ideas in understandable, relatable ways. I am excited by lifelong 
              learning and currently seeking opportunities to expand and strengthen 
              my engineering toolkit.
              </div>
              <h1>Tech Skills</h1>
                <div id="skillz">
                Javascript, React.js, CSS, HTML, D3.js, Node.js, Express.js, 
                Python, SQL, PostgreSQL, Sequelize, MongoDB, Mongoose, 
                Axios, Next.js, EJS, Bootstrap, Skeleton, Heroku, Git, GitHub

                </div>
            </div>

            {/* <div className="container secondary" >
                <h1>Tech Skills</h1>
                <div>
                    D3.js, Javascript, React.js, HTML, CSS, 
                    Bootstrap, Skeleton, Node.js, Express.js, Python, 
                    SQL, PostgreSQL, Sequelize, MongoDB, Mongoose, Heroku, Git, GitHub

                </div>
            </div> */}

            {/* <div className="container secondary" id="skillz">
                <h1>Skills</h1>
            </div> */}

            <div className="container secondary" id="projects">
                <h1>Projects</h1>
                <div className="content">
                    <div className="img">
                        <h2 className="project-name">Spirographer</h2>
                        <Image
                            loading="eager"
                            className="pic"
                            src='/spirographer.png'
                            alt='a picture of Spirographer app, a spirograph generator'
                            height="1080"
                            width="1920"
                        />
                    </div>
                    <div className="project-details">
                        <div className="links">
                            <div className="link">
                                <Link href='https://wonkatin.github.io/spirographer/'>
                                    <a target="_blank" rel="noopener noreferrer">Visit Site</a>
                                </Link> 
                            </div>

                            <div className="link">
                                <Link href='https://github.com/wonkatin/spirographer'>
                                    <a target="_blank" rel="noopener noreferrer">View Code</a>
                                </Link> 
                            </div>

                        </div>
                        <div className="description">
                            Spirographer is a spirograph generator made using D3.js to plot 
                            and animate the parametric equation of a spirograph. 
                            Users can watch a slideshow of random spirographs or use the 
                            inputs to make their own. There are many ways to manipulate and play with 
                            the Spirographer: change colors, add layers and download your creation! 
                        </div>
                        <div className="tech">
                            Front-end application built using D3.js, Javascript, HTML, CSS and Skeleton
                        </div>
                         
                    </div>
                </div>
                <div className="content">
                    <div className="img">
                        <h2 className="project-name">Mastermind</h2>
                        <Image
                            loading="eager"
                            className="pic"
                            src='/mastermind.png'
                            alt='a picture of Mastermind, a game that uses logical deduction'
                            height="1080"
                            width="1920"
                        />
                    </div>
                    <div className="project-details">
                        <div className="links">
                            <div className="link">
                                <Link href='https://wonkatin.github.io/'>
                                    <a target="_blank" rel="noopener noreferrer">Visit Site</a>
                                </Link> 
                            </div>

                            <div className="link">
                                <Link href='https://github.com/wonkatin/Master-Mind-Project1'>
                                    <a target="_blank" rel="noopener noreferrer">View Code</a>
                                </Link> 
                            </div>

                        </div>
                        <div className="description">
                            Mastermind is a deductive reasoning game. The player’s task is to guess the secret code using logical deduction. 
                            The game is played by selecting colors and checking them against the secret code. 
                            Each time a player guesses, they are given feedback about their combination. 
                        </div>
                        <div className="tech">
                            Front-end application built using, Javascript, HTML, and CSS 
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="img">
                        <h2 className="project-name">Kitchen Sink</h2>
                        <Image
                            loading="eager"
                            className="pic"
                            src='/kitchen_sink.png'
                            alt='a picture of Kitchen Sink app, an app that searches for recipes'
                            height="1080"
                            width="1920"
                        />
                    </div>
                    <div className="project-details">
                        <div className="links">
                            <div className="link">
                                <Link href='https://kitchen-sink-project-two.herokuapp.com/'>
                                    <a target="_blank" rel="noopener noreferrer">Visit Site</a>
                                </Link> 
                            </div>

                            <div className="link">
                                <Link href='https://github.com/wonkatin/project2'>
                                    <a target="_blank" rel="noopener noreferrer">View Code</a>
                                </Link> 
                            </div>

                        </div>
                        <div className="description">
                            Kitchen Sink is a recipe search app designed to allow users to search for recipes 
                            using specific ingredients and adding limits on number of ingredients a recipe result can contain. 
                            Additionally, users can save recipes to their favorites and 
                            leave reviews with ratings and comments. Recipes that have been reviewed 
                            appear on the homepage for other users to peruse and try. 
                        </div>
                        <div className="tech">
                            Full stack application built using Javascript, EJS, Node.js, Express, PostgreSQL, SQL/Sequelize, Axios and CSS
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="img">
                        <h2 className="project-name">Trip Tracker</h2>
                        <Image
                            loading="eager"
                            className="pic"
                            src='/trip_tracker.png'
                            alt='a picture of Trip Tracker app'
                            height="1080"
                            width="1920"
                        />
                    </div>
                    <div className="project-details">
                        <div className="links">
                            <div className="link">
                                <Link href='https://trip-tracker-whatever.netlify.app/'>
                                    <a target="_blank" rel="noopener noreferrer">Visit Site</a>
                                </Link> 
                            </div>

                            <div className="link">
                                <Link href='https://github.com/wonkatin/project3_client'>
                                    <a target="_blank" rel="noopener noreferrer">View Code</a>
                                </Link> 
                            </div>

                        </div>
                        <div className="description">
                            Trip Tracker is an app designed to help users stay organized while traveling. 
                            Through TT, users are able to create a profile and save information about different 
                            trips that they are planning. Each trip includes all the tools necessary to stay organized, 
                            think ahead and find information relevant to their travel needs.  
                        </div>
                        <div className="tech">
                            Full stack application built using Javascript, React.js, Node.js, Express, Mongo/Mongoose, Axios and CSS

                        </div>
                    </div>
                </div>
            </div>

            <div className="container secondary" id="contact">
                <h1>Contact Me!</h1>
                <div className="content">
                    <div className="me">

                        <Image
                            loading="eager"
                            src='/sarah.png'
                            alt='a picture of Sarah Marie Coogan'
                            height={300}
                            width={300}
                        />
                    </div>
                    <div className="deets">
                        <ul>
                            <div className="bumper email">
                                E-MAIL: SarahMarieCoogan@gmail.com
                            </div>
                            <div className="bumper">
                                <Link href='https://github.com/wonkatin'>
                                    <a target="_blank" rel="noopener noreferrer">GitHub</a>
                                </Link> 
                            </div>
                            <div className="bumper">
                                <Link href='https://www.linkedin.com/in/sarahmariecoogan/'>
                                    <a target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </Link>
                            </div>
                            <div className="bumper">
                                <Link href='https://docs.google.com/document/d/1JEYn8dXct0QIjwr-RG9OlZKJXJK3is1JVdpGVOqEF6s/edit?usp=sharing'>
                                    <a target="_blank" rel="noopener noreferrer">Resume</a>
                                </Link>
                            </div>
                            {/* <div className="bumper">
                                <Link href='https://codepen.io/wonkatin'>
                                    <a target="_blank" rel="noopener noreferrer">Code Pen</a>
                                </Link>
                            </div> */}
                        </ul>
                    </div>
                </div>

            </div>


      </div>
    )
}
