const RouteSkeleton = () => (
  <div className="route-skeleton" aria-hidden="true" role="presentation">
    <div className="route-skeleton__inner">
      <div className="route-skeleton__bar route-skeleton__bar--accent" />
      <div className="route-skeleton__bar route-skeleton__bar--title" />
      <div className="route-skeleton__bar route-skeleton__bar--subtitle" />
      <div className="route-skeleton__bar route-skeleton__bar--line" style={{ width: '70%' }} />
      <div className="route-skeleton__bar route-skeleton__bar--line" style={{ width: '55%' }} />
    </div>
  </div>
);

export default RouteSkeleton;
