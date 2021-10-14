const Header = (props) => {
    return (
        <section>
            <h1 data-content="name" className="name">{props.name}</h1>
            <h2 data-content="title">{props.title}</h2>
            <section id="contact">
                <div className="social"><i className="fa fa-phone fa-fw" aria-hidden="true"></i>&nbsp;<a href="tel:{props.phoneNumber}">{props.phoneNumber}</a></div>
                <div className="social">
                    <i className="fa fa-envelope fa-fw" aria-hidden="true"></i>&nbsp;<a href="mailto:{props.email}">{props.email}</a></div>
                <div className="social">
                    <i className="fa fa-link fa-fw" aria-hidden="true"></i>&nbsp;<a href="{props.website}">{props.website}</a>
                </div>
                <div className="social">
                    <i className="fa fa-github fa-fw" aria-hidden="true"></i>&nbsp;<a href="{props.github}">{props.github}</a>
                </div>
                <div className="social">
                    <i className="fa fa-linkedin fa-fw" aria-hidden="true"></i>&nbsp;<a href="{props.linkedin}">{props.linkedin}</a>
                </div>
            </section>
        </section>
    );
}

export default Header;