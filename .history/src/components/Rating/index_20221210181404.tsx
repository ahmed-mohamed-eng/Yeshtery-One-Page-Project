import styles from './Rating.module.css';

export interface RatingProps {
    rate?: number;
    customerRates?: number;
}

const Rating = () => {
  return (
    <div className={styles.rating}>
      
    </div>
  )
}

export default Rating;