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
              <p className="job-title">Data Visualization Engineer</p>
            </div>

            <div className="container secondary" id="tech">
                <h1>Tech Skills</h1>
                <div>
                    D3.js, Javascript, React.js, HTML, CSS, 
                    Bootstrap, Skeleton, Node.js, Express.js, Python, 
                    SQL, PostgreSQL, Sequelize, MongoDB, Mongoose, Heroku, Git, GitHub

                </div>
            </div>

            {/* <div className="container secondary" id="skillz">
                <h1>Skills</h1>
            </div> */}

            <div className="container secondary" id="projects">
                <h1>Projects</h1>
                <div className="content">
                    <div className="img">
                        <Image
                            className="pic"
                            src='/spirographer.png'
                            alt='a picture of Spirographer app, a spirograph generator'
                            height="394"
                            width="700"
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
                        <div>
                            Front-end application built using D3.js, Javascript, HTML, CSS and Skeleton
                        </div>
                         
                    </div>
                </div>
                <div className="content">
                    <div className="img">
                        <Image
                            cclassName="pic"
                            src='/mastermind.png'
                            alt='a picture of Mastermind, a game that uses logical deduction'
                            height="394"
                            width="700"
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
                            Master Mind is a deductive reasoning game. The player’s task is to guess the secret code using logical deduction. 
                            The game is played by selecting colors and checking them against the secret code. 
                            Each time a player guesses, they are given feedback about their combination. 
                        </div>
                        <div>
                            Front-end application built using, Javascript, HTML, and CSS 
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="img">
                        <Image
                            className="pic"
                            src='/kitchen_sink.png'
                            alt='a picture of Kitchen Sink app, an app that searches for recipes'
                            height="394"
                            width="700"
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
                        <div>
                            Full stack application built using Javascript, EJS, Node.js, Express, PostgreSQL, SQL/Sequelize, Axios and CSS
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="img">
                        <Image
                            className="pic"
                            src='/trip_tracker.png'
                            alt='a picture of Trip Tracker app'
                            height="394"
                            width="700"
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
                        <div>
                            Full stack application built using Javascript, React.js, Node.js, Express, Mongo/Mongoose, Axios and CSS

                        </div>
                    </div>
                </div>
            </div>

            <div className="container secondary">
                <h1>Contact Me!</h1>
                <div className="content">
                    <div className="me">

                        <Image
                            src='/sarah.png'
                            alt='a picture of Sarah Marie Coogan'
                            height={300}
                            width={300}
                        />
                    </div>
                    <div className="deets">
                        <ul>
                            <li>
                                E-mail: SarahMarieCoogan@gmail.com
                            </li>
                            <li>
                                <Link href='https://github.com/wonkatin'>
                                    <a target="_blank" rel="noopener noreferrer">GitHub</a>
                                </Link> 
                            </li>
                            <li>
                                <Link href='https://www.linkedin.com/in/sarahmariecoogan/'>
                                    <a target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://docs.google.com/document/d/1ONbbax_CHdMejgWQ9P9cy8yW5rmX68lCNmk09k7JOa0/edit?usp=sharing'>
                                    <a target="_blank" rel="noopener noreferrer">Resume</a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href='https://codepen.io/wonkatin'>
                                    <a target="_blank" rel="noopener noreferrer">Code Pen</a>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>

            </div>


      </div>
    )
}
