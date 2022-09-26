
import {PropTypes} from "prop-types";

const Footer = (props) => {
    if (!props.leftContent && !props.rightContent) {
        return null;
    }

    Footer.propTypes = {
        leftContent : PropTypes.element,
        rightContent : PropTypes.string

    }

    // console.log(props);


    return (
            <footer className="main-footer clearfix fixed-bottom bg-white border-top">
                {props.rightContent && (
                    <div className="float-right d-none d-sm-inline " style={{color: '#6c757d'}}>
                        {props.rightContent}
                    </div>
                )}

                {props.leftContent && (
                    <div className="text-center justify-content-center">
                        {props.leftContent}
                    </div>
                )}

            </footer>
    );

   
};

export default Footer;