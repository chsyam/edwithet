import Layout from "@/components/layout/Layout";
import VideoContent from "./VideoContent";
import Navbar from "@/components/navbar/Navbar";
import styles from './Videos.module.css'

function Videos() {
    return (
        <div className={styles.videoBody}>
            <Navbar />
            <VideoContent />
        </div>
    );
}

export default Videos;