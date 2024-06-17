

import parse, { domToReact } from 'html-react-parser';
import Link from 'next/link'

export const parseContent = (content) => {
    const options = {
      replace: ({ name, attribs, children }) => {
        if (name === 'a' && attribs.href) {
          return (
            <Link className={attribs.className} href={attribs.href} passHref>
        {domToReact(children)} 
            </Link>
          );
        }
      },
    };

    return parse(content, options);
  };