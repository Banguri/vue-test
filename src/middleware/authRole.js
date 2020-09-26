export default async function({ store, route, redirect }) {
  try {
    const pathSplits = route.path.split('/').filter(mem => {
      return (mem || '').trim().length > 0;
    });

    const pageRoute = pathSplits[1] || '';

    const isSigned = store.state.session.user.signed;
    if (isSigned) {
      const customer = store.state.session.user.customer;
      const userType = customer.customerType.value;
      if (userType && pageRoute !== userType && pageRoute !== 'int') {
        redirect(`/ssia/${userType}/main`);
      }
    }
  } catch (e) {
    console.error('Some thing went wrong!', e);
  }
}
