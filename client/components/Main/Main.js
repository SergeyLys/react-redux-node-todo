import "./foundation-sites/scss/foundation.scss";
import "./foundation-sites/scss/settings/_settings.scss";
import './global.scss';

import React from 'react';
import routes from '../../routes';

export default class Main extends React.Component {
    render() {
        return (
            <div className="site-wrapper">

                <main className="site-main">
                    <div className="row align-center">

                        <div className="small-12 medium-9 columns">
                            {routes}
                        </div>

                    </div>
                </main>

            </div>
        )
    }
}