import { useTranslation } from 'react-i18next';

const Button = () => {
  const { t } = useTranslation();
  return <button>Click me: {t('hello')}</button>;
};

export default Button;
