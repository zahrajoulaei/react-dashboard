
import { useState } from 'react';
import FirstTab from '../all-tabs/FirstTab';
import SecondTab from '../all-tabs/SecondTab';
import styles from '../all-tabs/tabs.module.css'
export default function Tab() {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        setActiveTab("tab2");
      };
    return (
        <div className={styles.Tabs}>
            <ul className={styles.nav}>
                <li   onClick={handleTab1} className={activeTab === "tab1" ? "active" : ""}>Tab 1</li>
                <li   onClick={handleTab2} className={activeTab === "tab2" ? "active" : ""}>Tab 2</li>
            </ul>
            <div className={styles.outlet}>
            {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>
        </div>
    );
}

