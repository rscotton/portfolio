import React from 'react';
import Moon from '@img/background_assets/moon.svg';
import MoonLarge from '@img/background_assets/moon-large.svg';
import SpaceManFly from '@img/background_assets/space-man-fly.svg';
import SpaceManWave from '@img/background_assets/space-man-wave.svg';
import Stars from '@img/background_assets/stars.svg';
import componentStyles from './styles.module.scss';

interface BackgroundSvgAssetProps extends React.HTMLAttributes<HTMLDivElement> {
  asset: any;
}

const BackgroundSvgAsset: React.FC<BackgroundSvgAssetProps> = ({
  className,
  asset,
  ...rest
}) => (
  <div className={className} {...rest}>
    {asset}
  </div>
);

const SpaceSubfooter: React.FC = ({ children }) => (
  <div className={componentStyles.wrap}>
    <div className={componentStyles.content}>{children}</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <BackgroundSvgAsset asset={<Moon />} />
      <BackgroundSvgAsset asset={<MoonLarge />} />
      <BackgroundSvgAsset asset={<SpaceManFly />} />
      <BackgroundSvgAsset asset={<SpaceManWave />} />
      <BackgroundSvgAsset asset={<Stars />} />
    </div>
  </div>
);

export default SpaceSubfooter;
