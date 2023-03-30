import { useLayoutEffect, useState } from 'react';

export const usePortal = () => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`root-portal-${self.crypto.randomUUID()}`);

  useLayoutEffect(() => {
    const div = document.createElement('div');
    div.id = portalId;

    document.getElementsByTagName('body')[0].prepend(div);
    setLoaded(true);

    return () => {
      document.getElementsByTagName('body')[0].removeChild(div);
    };
  }, [portalId]);

  return { loaded, portalId };
};
