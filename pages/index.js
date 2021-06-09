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
            </div>

            {/* <div className="container secondary" id="skillz">
                <h1>Skills</h1>
            </div> */}

            <div className="container secondary" id="projects">
                <h1>Projects</h1>
            </div>

            <div className="container secondary" id="contact">
                <h1>Contact Me!</h1>
                <div className="content">
                    <div className="img">

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
                                    <a>GitHub</a>
                                </Link> 
                            </li>
                            <li>
                                <Link href='https://www.linkedin.com/in/sarahmariecoogan/'>
                                    <a>LinkedIn</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://docs.google.com/document/d/1ONbbax_CHdMejgWQ9P9cy8yW5rmX68lCNmk09k7JOa0/edit?usp=sharing'>
                                    <a>Resume</a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href='https://codepen.io/wonkatin'>
                                    <a>Code Pen</a>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>

            </div>


      </div>
    )
}
