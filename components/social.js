import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Social({iconSize = 'initial'}) {
    return (
        <ul className={styles.list} style={{'--icon-size':iconSize}}>
            <li>
                <a href="ltrntxs@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="sr-only">Email</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/Lutro-js">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="sr-only">GitHub</span>
                </a>
            </li>
            {/* <li>
                <a href="">
                    <FontAwesomeIcon icon={faInstagram} />
                    <span className="sr-only">Instagram</span>
                </a>
            </li> */}
        </ul>
    )
}
