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
                I have worked in the technology industry for more than 2 years as a content writer, blogger and a software engineer.
                <br />
            <br/>
                Extremely skilled at my job, I am currently working as a Frontend developer on a remote ecommerce startup, somewhere in Nigeria.

            <br/>
                Occasionally, I write about my technical exploits and random technical topics on my blog.
            <br />
                I enjoy writing peoms, discussing philosophy and politics, reading books. <br /> (Basically a geek).
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
                    Worked as a Frontend Engineer in a promising startup, constructing the UI according to the designs provided, 
                    also intuitive in implementing desings that were approved by the committe
                    and implementing complex logic. 
                    </p>
                    <p  className="project__work_info__resume" onClick={()=> window.open("https://docs.google.com/document/d/1Dns9o9z6MBw4plER8D7hdLQPChwrjMpwRiWmWwc1aOQ/edit?usp=sharing", "_blank")}>Read More on my resume</p>
                    
                </div>
            </article>

            <article className="projects__projects">
                <div className="main__head_empty"></div>
                <h1 className="projects__work_title">Projects</h1>
                <p className="project__work_line"></p>
                <section className="projects__grid">
                    <div className="project__work_info">
                        <h1 className="project__work_info__company">AudioPhile</h1>
                        <p className="project__work_info__description">
                        An e-commerce application (Prototype) designed for facilating the sales of audio products.
                        <br />
                        It was built with React, using typescript and Redux for state management.
                        For the design, I implemented Chakra UI(The Best, for me).
                        </p>
                        
                        <div className="project__work_view">
                            <button className="project__work_view_btn" onClick={()=> window.open("https://github.com/naziiriah/AudioPhile", "_blank")}>view code</button>
                            <button className="project__work_view_btn" onClick={()=> window.open("https://audiophile-five.vercel.app/", "_blank")}>Visit live site</button>                
                        </div>  
                    </div>

                    <div className="project__work_info">
                        <h1 className="project__work_info__company">Product Feedback App</h1>
                        <p className="project__work_info__description">
                           A product feedback application, with CRUD features, allowing you to monitor events, comments, likes on a products 
                            <br />
                            Built with React, state management was handled with REDUX toolkit, Chakra UI.
                        </p>    
                        <div className="project__work_view">
                            <button className="project__work_view_btn" onClick={()=> window.open("https://github.com/naziiriah/products-feedback-app", "_blank")}>view code</button>
                            <button className="project__work_view_btn" onClick={()=> window.open("https://product-feedback-app-bca8d.web.app/", "_blank")}>Visit live site</button>                
                        </div>  
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
                            <h1 className="project__work_info__company">Meta-Pebble: The rise of MachineFi</h1>
                            <p className="project__work_info__description">
                                An article discussing meta-pebble, a web3.0 product,  facilitated by IOTEX.
                                <br />
                                
                                 A brilliant idea that enables security and allows the use of our presence on the internet
                                 to earn money for us..
                            </p>    
                            <div className="project__work_view">
                            <button className="project__work_view_read" onClick={()=> window.open("https://nazirwrites.hashnode.dev/meta-pebble-the-rise-of-machinefi", "_blank")}>Read more</button>
                                          
                        </div>  
        
                
                    </div>
                    <div className="project__work_info">
                            <h1 className="project__work_info__company">What I Learnt About Typescript</h1>
                            <p className="project__work_info__description">
                                An article about my depicting my story about typescript, a bit technical
                                A gritty, rough article earlier in my writing career in order to solidify what i learnt about typescript.
                                A basic intro for newbies.                                 
                            </p>    
                            <div className="project__work_view">
                            <button className="project__work_view_read" onClick={()=> window.open("https://nazirwrites.hashnode.dev/what-i-learnt-about-typescript", "_blank")}>Read more</button>
                                          
                        </div>  
    
                    </div>

                    <div className="project__work_info">
                            <h1 className="project__work_info__company">Starcrazy : The Future Of Gamefi</h1>
                            <p className="project__work_info__description">
                                This Article talks about a p2e game, in the web3.0 space, while writing this I learnt a lot about web3 and p2e
                                <br /> The gem game StarCrazy is a play-to-earn game that is built on the IoT blockchain. 
                                                            
                                 
                            </p>    
                            <div className="project__work_view">
                            <button className="project__work_view_read" onClick={()=> window.open("https://nazirwrites.hashnode.dev/starcrazy-the-future-of-gamefi", "_blank")}>Read more</button>
                                          
                        </div>  
    
                    </div>
                    <div className="project__work_info">
                            <h1 className="project__work_info__company">NASDEX: Embracing Equity on Blockchain</h1>
                            <p className="project__work_info__description">
                            In this brochure, we’ll be visiting the universe that is NASDEX,
                            how it came to be, the issues faced in the current stock market, 
                             
                            the current system using blockchain technology.
                                
                            </p>    
                            <div className="project__work_view">
                            <button className="project__work_view_read"onClick={()=> window.open("https://nazirwrites.hashnode.dev/nasdex-embracing-equity-on-blockchain", "_blank")}>Read more</button>          
                        </div>  
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
                <Header/>
            </section>
            <Body/>
        </>
    );
}
 
