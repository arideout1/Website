import React, { useEffect, useState } from 'react';

import styles from "./Dropdown.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Dropdown(props) {

    const [options, setOptions] = useState(props.options || [
        { key: "key1", value: "a", url: '#' },
        { key: "key2", value: "b", url: '#' },
        { key: "key3", value: "c", url: '#' },
    ])
    const [displayDropdown, setDisplayDropdown] = useState(false);
    const [selectedOption, setSelectionOption] = useState(options[0]);
    const [text, setText] = useState(props.text || "Options")

    useEffect(() => {
        if (selectedOption.value === "hobbies") {

        }
    }, [selectedOption]);

    return (
        <div className={styles.dropdownContainer}>
            <div onClick={() => setDisplayDropdown(!displayDropdown)} className={`${styles.dropdownInput}  ${displayDropdown && styles.noBottomBorder}`}>
                <div>
                    {<FontAwesomeIcon className={styles.caret} icon={displayDropdown ? faCaretDown : faCaretRight} />}
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.text}>{text} {props.showSelected && selectedOption.value}</div>
                </div>
            </div>
            {displayDropdown &&
                <div className={styles.dropdownOptions}>
                    {
                        options.map((item, index) => {
                            return <Link key={index} style={{ textDecoration: 'none' }} to={item.url || '#'}>
                                <div className={styles.option} onClick={() => setSelectionOption(item)} key={item.key}>{item.value}
                                </div>
                            </Link>

                        })
                    }

                </div>
            }
        </div >
    )
}

export default Dropdown;