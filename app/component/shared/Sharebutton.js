'use client'
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="share-buttons">
      <span className='text-sm'>Share</span>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={24} round />
      </WhatsappShareButton>

      <EmailShareButton url={url} subject={title} body="Check this out!">
        <EmailIcon size={24} round />
      </EmailShareButton>

      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={24} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={24} round />
      </TwitterShareButton>

      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={24} round />
      </TelegramShareButton>

      {/* Add more buttons as necessary */}
    </div>
  );
};

export default ShareButtons;
