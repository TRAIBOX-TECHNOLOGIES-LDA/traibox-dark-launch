import { Link, useSearchParams } from 'react-router-dom';
import { AccessFields } from '@/components/v6/AccessForm';
import { Brand } from '@/components/v6/Brand';
import '@/components/v6/reference.css';
import '@/components/v6/adaptations.css';

export default function RequestAccessPage() {
  const [params] = useSearchParams();
  return <div className="v6-site"><main className="access-page">
    <Link to="/"><Brand /></Link><p><Link to="/">← Back to website</Link></p>
    <AccessFields initialInterest={params.get('interest') === 'design_partner' ? 'design_partner' : 'early_access'} />
  </main></div>;
}
