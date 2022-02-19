
import { useState } from 'react';
import FirstTab from '../all-tabs/FirstTab';
import SecondTab from '../all-tabs/SecondTab';
import styles from '../all-tabs/tabs.module.css'
export default function Tab() {
    const [activeTab, setActiveTab] = useState("tab1");
    return (
        <div className={styles.Tabs}>
            {/* Tab nav */}
            <ul className={styles.nav}>
                <li className={activeTab === "tab1" ? "active" : ""}>Tab 1</li>
                <li className={activeTab === "tab2" ? "active" : ""}>Tab 2</li>
            </ul>
            <div className={styles.outlet}>
            {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>
        </div>
    );
}

