import "../src/styles/index.css"

const Header = () => {
    return ( 
        <header className="main__head">
            <div className="main__head_empty"></div>
            <div className="main__head_logo">
            </div>
            <h2 className="main__head_name">
                nazir abubakar adinoyi
            </h2>
            <p className="main__head_introduction">
                I have worked in the technology industry for 5 years as a technical writer, software engineer and recently, a developer advocate and content creator.
                <br />
            <br/>
                Extremely skilled at my job, I am currently authoring my debut book on Building Web APIs with Python and FastAPI. I am also the creator of the FastAPI and MongoDB boilerplate and a co-author of the open source BuyCoins SDK, both written in Python.
            <br/>
            <br />
                Occasionally, I write about my technical exploits and random technical topics on my blog.
            </p>

        </header>
    );
}


const Body = () => {
    return(
        <section className="projects">
            <article className="projects__work">
            <div className="main__head_empty"></div>
                <h1 className="projects__work_title">Work experience</h1>
                <p className="project__work_line"></p>
                <div className="project__work_info">
                    <h1 className="project__work_info__company">venmun</h1>
                    <p className="project__work_info__description">
                    Worked as a developer advocate and later a content creator responsible for creating how-to written and video content and managing the developer community.
                    </p>
                    <p  className="project__work_info__resume">Read More on my resume</p>
                    
                </div>
            </article>

            <article className="projects__projects">
                <div className="main__head_empty"></div>
                <h1 className="projects__work_title">Projects</h1>
                <p className="project__work_line"></p>
                <section className="projects__grid">
                    <div className="project__work_info">
                
                    </div>
                    <div className="project__work_info">
                
                    </div>
                    <div className="project__work_info">
                
                    </div>
                </section>
            </article>
            <article className="projects__blogs">
                <div className="main__head_empty"></div>
                <h1 className="projects__work_title">Blogs/Contents</h1>
                <p className="project__work_line"></p>
                <section className="projects__grid">
                    <div className="project__work_info">
                
                    </div>
                    <div className="project__work_info">
                
                    </div>
                    <div className="project__work_info">
                
                    </div>
                </section>
                <section className="projects__grid">
                    <div className="project__work_info">
                
                    </div>
                    <div className="project__work_info">
                
                    </div>
                </section>

            </article>

        </section>
    )
}



 export const PortfolioPage = () => {
    return (
        <>
            <section className="main">
                <div className="main__rectangle"></div>
                <Header/>
            </section>
            <Body/>
        </>
    );
}
 
