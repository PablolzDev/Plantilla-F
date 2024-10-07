import { IntlShape } from 'react-intl';

type Props = {
    locale: string;
    messages: Record<string, string>;
};

export declare function createIntlProvider({ locale, messages }: Props): IntlShape;