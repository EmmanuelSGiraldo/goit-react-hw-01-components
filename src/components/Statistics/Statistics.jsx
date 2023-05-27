import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({
  title,
  stats = []
}) => {
  return (
    <section className={
      style['statistics']
    }>
      {
      title && <h2 className={
        style['title']
      }>Upload stats</h2>
    }
      {
      stats.map((stat) => {
        return (
          <ul className={
              style['list-item']
            }
            key={
              stat.id
          }>
            <li className={
              style['item']
            }>
              <span className={
                style['label']
              }>
                {
                stat.label
              }</span>
              <span className={
                style['percentage']
              }>
                {
                stat.percentage
              }</span>
            </li>
          </ul>
        );
      })
    } </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, label: PropTypes.string.isRequired, percentage: PropTypes.string.isRequired}))
};

export default Statistics;
