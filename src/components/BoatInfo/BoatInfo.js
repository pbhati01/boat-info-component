import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import styles from './BoatInfo.styles';

const useStyles = createUseStyles(styles);

const BoatInfo = ({ data }) => {
  const theme = useTheme();
  console.log('theme', theme);
  const classes = useStyles({
    theme,
    priceType: data.price.type,
    offset: Math.round((data.reviews.overall_rating / 5) * 100)
  });
  const dateMilis = new Date().getTime();
  return (
    <div className={classes.boatInfoContainer}>
      <div className={classes.boatImageWrapper}>
        <picture className={classes.boatPictureContainer}>
          <source
            media={`(min-width: ${theme.breakpoints.large}px)`}
            srcSet={data.image_urls[1]}
          />
          <source
            media={`(min-width: ${theme.breakpoints.desktop}px)`}
            srcSet={data.image_urls[0]}
          />
          <img
             className={classes.boatImage}
            src={data.image_url}
            alt="Boat image"
          />
        </picture>
      </div>
      <div className={classes.detailsContainer}>
        <div className={classes.primaryDetailsContainer}>
          <div className={classes.nameContainer}>
            <div className={classes.nameLabel}>{data.name}</div>
            <div>
              <span className={classes.yearLabel}>{data.make_year}</span>
              <span className={classes.cityCountryLabel}>{`${data.city}, ${data.country}`}</span>
            </div>
            <div className={classes.likesContainer}></div>
          </div>
          {data.hot && (
            <div className={classes.hotContainer}>
              <div>
                <div>
                  <span className={classes.hotLabel}>HOT</span>
                  <span className={classes.viewCountLabel}>{`${data.hot.views} views`}</span>
                </div>
                <div className={classes.sinceLabel}>in the last 24h</div>
              </div>
            </div>
          )}
        </div>
        <div className={classes.secondaryDetailsContainer}>
          <div className={classes.secondaryDetails}>
            <div className={classes.secondaryDetailsValues}>{data.length}</div>
            <div className={classes.secondaryDetailsLabels}>LENGTH</div>
          </div>
          <div className={classes.secondaryDetails}>
            <div className={classes.secondaryDetailsValues}>{data.num_of_cabins}</div>
            <div className={classes.secondaryDetailsLabels}>CABINS</div>
          </div>
          <div className={classes.secondaryDetails}>
            <div className={classes.secondaryDetailsValues}>{data.max_num_of_guests}</div>
            <div className={classes.secondaryDetailsLabels}>GUESTS</div>
          </div>
          <div className={classes.reviewsContainer}>
            <div className={classes.reviewStars}></div>
            <div className={classes.secondaryDetailsLabels}>{`${data.reviews.count} REVIEWS`}</div>
          </div>
        </div>
        <div className={classes.featuresNPriceContainer}>
          <div className={classes.featuresContainer}>
            <div className={classes.features}>
              {data.features.map((feature, index) => (
                <div className={classes.featureLabel} key={`${dateMilis}${index}`}>{feature}</div>
              ))}
            </div>
            <div className={classnames(classes.features, classes.featuresKeyValuePair)}>
              <div className={classes.secondaryDetailsLabels}>SAIL TYPE</div>
              <div className={classes.sailTypeValue}>{data.sail_type}</div>
            </div>
            <div className={classnames(classes.features, classes.featuresKeyValuePair)}>
              <div className={classes.secondaryDetailsLabels}>FREE EXTRAS</div>
              <div className={classes.sailTypeValue}>{data.free_extras.join(', ')}</div>
            </div>
          </div>
          <div className={classes.priceNBookingContainer}>
            <div className={classes.priceContainer}>
              <div className={classes.priceValue}>{data.price.value}</div>
              <div className={classes.helpButton}></div>
            </div>
            <div className={classes.directBookingContainer}>
              {data.is_direct_booking_available && (
                <div className={classes.directBookingLabel}>DIRECT BOOKING</div>
              )}
              <div className={classes.viewDetailsButton}></div>
            </div>
          </div>
        </div>
      </div>
      {data.is_recommended && <div className={classes.recommendedContainer}>ZIZOO RECOMMENDED</div>}
    </div>
  );
};

BoatInfo.propTypes = {
  data: PropTypes.object,
};
BoatInfo.defaultProps = {
  user: {},
};

export default BoatInfo;
