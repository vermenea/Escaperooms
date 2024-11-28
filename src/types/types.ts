export interface Page404Styles {
  container: React.CSSProperties;
  header: React.CSSProperties;
  message: React.CSSProperties;
  link: React.CSSProperties;
}

export type DiscountProps = {
	discountLogo: string;
	discountHeading: string;
	discountText: string;
};

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}