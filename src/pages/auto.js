import React, { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import aamg from '../img/catalogAuto/aamg_gt63.jpg';
import jetta from '../img/catalogAuto/jetta.jpg';
import m5 from '../img/catalogAuto/m5.jpg';
import octavia from '../img/catalogAuto/octvv7.jpg';
import cayenne from '../img/catalogAuto/porsche cayene.jpg';
import porsche from '../img/catalogAuto/porsche.jpg';
import porsche911 from '../img/catalogAuto/porsche911.jpg';
import rolls from '../img/catalogAuto/rolls.jpg';

const cars = [
  { id: 1, brand: 'Mercedes-Benz', model: 'AMG GT 63', year: 2024, price: 189, seats: 5, fuel: 'Benzina', transmission: 'Automata', rating: 4.9, company: 'DrivePoint', companyRating: 4.8, category: 'Luxury', image: aamg, available: true, description: 'Un grand tourer performant, cu interior premium și confort pentru drumuri lungi.' },
  { id: 2, brand: 'Volkswagen', model: 'Jetta', year: 2023, price: 48, seats: 5, fuel: 'Benzina', transmission: 'Automata', rating: 4.6, company: 'City Wheels', companyRating: 4.7, category: 'Economy', image: jetta, available: true, description: 'O alegere practică și economică pentru deplasări urbane și escapade de weekend.' },
  { id: 3, brand: 'BMW', model: 'M5 Competition', year: 2024, price: 220, seats: 5, fuel: 'Benzina', transmission: 'Automata', rating: 4.9, company: 'DrivePoint', companyRating: 4.8, category: 'Sport', image: m5, available: true, description: 'Performanță de circuit și rafinament într-un sedan pregătit pentru orice călătorie.' },
  { id: 4, brand: 'Skoda', model: 'Octavia', year: 2023, price: 56, seats: 5, fuel: 'Diesel', transmission: 'Automata', rating: 4.7, company: 'Northstar Rent', companyRating: 4.9, category: 'Family', image: octavia, available: true, description: 'Spațiu generos pentru familie, consum eficient și dotări gândite pentru confort.' },
  { id: 5, brand: 'Porsche', model: 'Cayenne', year: 2024, price: 175, seats: 5, fuel: 'Benzina', transmission: 'Automata', rating: 4.8, company: 'Elite Motion', companyRating: 4.6, category: 'SUV', image: cayenne, available: true, description: 'SUV premium cu poziție înaltă la volan și un echilibru excelent între putere și confort.' },
  { id: 6, brand: 'Porsche', model: 'Panamera', year: 2022, price: 158, seats: 4, fuel: 'Benzina', transmission: 'Automata', rating: 4.7, company: 'Elite Motion', companyRating: 4.6, category: 'Luxury', image: porsche, available: true, description: 'Eleganță sportivă și o experiență de condus atent finisată, în fiecare detaliu.' },
  { id: 7, brand: 'Porsche', model: '911 Carrera', year: 2023, price: 245, seats: 2, fuel: 'Benzina', transmission: 'Automata', rating: 5.0, company: 'DrivePoint', companyRating: 4.8, category: 'Sport', image: porsche911, available: true, description: 'Un coupe iconic, disponibil pentru cei care vor să transforme drumul în destinație.' },
  { id: 8, brand: 'Rolls-Royce', model: 'Ghost', year: 2023, price: 390, seats: 5, fuel: 'Benzina', transmission: 'Automata', rating: 4.9, company: 'Grand Tour', companyRating: 4.9, category: 'Luxury', image: rolls, available: true, description: 'Confort excepțional și prezență distinctă pentru ocazii cu adevărat speciale.' },
];

const initialFilters = {
  search: '', minPrice: '', maxPrice: '', carRating: '', companyRating: '',
  brand: '', category: '', fuel: '', transmission: '', year: '', seats: '', sort: 'recommended',
};

const CarDetails = ({ car, onBack }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [requestMessage, setRequestMessage] = useState('');

  const today = new Date().toISOString().slice(0, 10);
  const rentalDays = startDate && endDate
    ? Math.max(0, Math.ceil((new Date(`${endDate}T00:00:00`) - new Date(`${startDate}T00:00:00`)) / 86400000))
    : 0;

  const submitRequest = (event) => {
    event.preventDefault();
    if (!rentalDays) {
      setRequestMessage('Alege o dată de predare ulterioară datei de preluare.');
      return;
    }
    setRequestMessage(`Rezervarea online nu este activă încă. Contactează ${car.company} pentru confirmarea ofertei.`);
  };

  return (
    <main className="car-details-page">
      <button className="back-to-catalog" type="button" onClick={onBack}>← Înapoi la mașini</button>
      <div className="car-details-layout">
        <div className="car-details-main">
          <nav className="car-breadcrumb" aria-label="Navigare">
            <Link to="/">Acasă</Link><span aria-hidden="true">/</span><Link to="/auto">Mașini</Link><span aria-hidden="true">/</span><span>{car.brand} {car.model}</span>
          </nav>
          <div className="car-details-image">
            <img src={car.image} alt={`${car.brand} ${car.model}`} />
            <span className="car-card__category">{car.category}</span>
          </div>
          <div className="car-details-title">
            <div><p className="eyebrow">{car.brand} · {car.year}</p><h1>{car.model}</h1></div>
            <span className="rating"><span aria-hidden="true">★</span> {car.rating.toFixed(1)} <small>rating</small></span>
          </div>
          <p className="car-details-description">{car.description}</p>
          <div className="car-details-specs" aria-label="Specificații">
            <div><span aria-hidden="true">♙</span><strong>{car.seats} locuri</strong><small>pasageri</small></div>
            <div><span aria-hidden="true">◷</span><strong>{car.transmission}</strong><small>transmisie</small></div>
            <div><span aria-hidden="true">⌁</span><strong>{car.fuel}</strong><small>combustibil</small></div>
            <div><span aria-hidden="true">★</span><strong>{car.category}</strong><small>categorie</small></div>
          </div>
          <section className="car-overview">
            <p className="eyebrow">DESPRE MAȘINĂ</p>
            <h2>Pregătită pentru următorul drum.</h2>
            <p>{car.description} Oferta este administrată de {car.company}, cu ratingul {car.companyRating.toFixed(1)}.</p>
            <p className="car-overview__note">Detaliile despre kilometraj, garanție și condițiile de închiriere se confirmă direct cu compania.</p>
          </section>
        </div>

        <aside className="booking-panel" aria-label="Solicită rezervarea">
          <div className="booking-panel__price"><strong>€{car.price}</strong><span>/ zi</span></div>
          <p className="booking-panel__company">{car.company} <span>★ {car.companyRating.toFixed(1)}</span></p>
          <form onSubmit={submitRequest}>
            <label className="booking-field"><span>Locul de preluare</span><input value={pickupLocation} onChange={(event) => setPickupLocation(event.target.value)} placeholder="Oraș sau adresă" required /></label>
            <div className="booking-dates">
              <label className="booking-field"><span>Preluare</span><input type="date" min={today} value={startDate} onChange={(event) => { setStartDate(event.target.value); setRequestMessage(''); }} required /></label>
              <label className="booking-field"><span>Returnare</span><input type="date" min={startDate || today} value={endDate} onChange={(event) => { setEndDate(event.target.value); setRequestMessage(''); }} required /></label>
            </div>
            <div className="booking-total">
              <span>{rentalDays ? `${rentalDays} ${rentalDays === 1 ? 'zi' : 'zile'} × €${car.price}` : 'Total estimativ'}</span>
              <strong>{rentalDays ? `€${rentalDays * car.price}` : '—'}</strong>
            </div>
            <button className="booking-submit" type="submit">Solicită rezervarea <span aria-hidden="true">↗</span></button>
            {requestMessage && <p className="booking-message" role="status">{requestMessage}</p>}
          </form>
          <p className="booking-disclaimer">Preț estimativ. Disponibilitatea și condițiile finale se confirmă cu firma de închirieri.</p>
        </aside>
      </div>
    </main>
  );
};

const Auto = () => {
  const [filters, setFilters] = useState(initialFilters);
  const navigate = useNavigate();
  const { carId } = useParams();
  const selectedCar = cars.find((car) => car.id === Number(carId));

  const filteredCars = useMemo(() => {
    const search = filters.search.trim().toLocaleLowerCase('ro');
    return cars.filter((car) => {
      const matchesSearch = !search || `${car.brand} ${car.model} ${car.company}`.toLocaleLowerCase('ro').includes(search);
      return matchesSearch
        && (!filters.minPrice || car.price >= Number(filters.minPrice))
        && (!filters.maxPrice || car.price <= Number(filters.maxPrice))
        && (!filters.carRating || car.rating >= Number(filters.carRating))
        && (!filters.companyRating || car.companyRating >= Number(filters.companyRating))
        && (!filters.brand || car.brand === filters.brand)
        && (!filters.category || car.category === filters.category)
        && (!filters.fuel || car.fuel === filters.fuel)
        && (!filters.transmission || car.transmission === filters.transmission)
        && (!filters.year || car.year === Number(filters.year))
        && (!filters.seats || car.seats >= Number(filters.seats));
    }).sort((first, second) => {
      if (filters.sort === 'price-low') return first.price - second.price;
      if (filters.sort === 'price-high') return second.price - first.price;
      if (filters.sort === 'rating') return second.rating - first.rating;
      if (filters.sort === 'year') return second.year - first.year;
      return second.rating + second.companyRating - first.rating - first.companyRating;
    });
  }, [filters]);

  const updateFilter = (event) => setFilters((current) => ({ ...current, [event.target.name]: event.target.value }));
  const activeFilters = Object.entries(filters).filter(([key, value]) => key !== 'sort' && value).length;

  if (carId) {
    return selectedCar
      ? <CarDetails car={selectedCar} onBack={() => navigate('/auto')} />
      : <main className="car-details-page"><h1>Nu am găsit această mașină.</h1><Link className="details-button" to="/auto">Înapoi la mașini</Link></main>;
  }

  return (
    <main className="catalog-page">
      <div className="catalog-heading">
        <div className="catalog-heading__copy">
          <p className="eyebrow">LIBERTATEA ÎNCEPE CU DRUMUL</p>
          <h1>Găsește mașina <span>potrivită.</span></h1>
          <p className="catalog-heading__text">Oferte atent alese de la companii de încredere. Compară, filtrează și pornește la drum.</p>
        </div>
        <div className="catalog-heading__note"><span className="availability-dot" /> {cars.length} mașini selectate</div>
      </div>

      <div className="catalog-layout">
        <aside className="filter-panel" aria-label="Filtrează automobilele">
          <div className="filter-panel__top"><div><p className="eyebrow">CĂUTAREA TA</p><h2>Filtrează</h2></div><button className="text-button" type="button" onClick={() => setFilters(initialFilters)}>Resetează</button></div>
          <label className="field-label" htmlFor="car-search">Caută</label>
          <div className="search-field"><span aria-hidden="true">⌕</span><input id="car-search" name="search" value={filters.search} onChange={updateFilter} placeholder="Marcă, model sau companie" /></div>

          <fieldset className="filter-group"><legend>Buget zilnic</legend><div className="price-fields"><label><span>De la</span><div className="number-field"><span>€</span><input aria-label="Preț minim pe zi" name="minPrice" type="number" min="0" value={filters.minPrice} onChange={updateFilter} placeholder="0" /></div></label><label><span>Până la</span><div className="number-field"><span>€</span><input aria-label="Preț maxim pe zi" name="maxPrice" type="number" min="0" value={filters.maxPrice} onChange={updateFilter} placeholder="Fără limită" /></div></label></div></fieldset>

          <fieldset className="filter-group"><legend>Rating minim</legend><label className="select-wrap"><span>Automobil</span><select name="carRating" value={filters.carRating} onChange={updateFilter}><option value="">Orice rating</option><option value="3">3+ stele</option><option value="4">4+ stele</option><option value="4.5">4,5+ stele</option></select></label><label className="select-wrap"><span>Companie</span><select name="companyRating" value={filters.companyRating} onChange={updateFilter}><option value="">Orice rating</option><option value="3">3+ stele</option><option value="4">4+ stele</option><option value="4.5">4,5+ stele</option></select></label></fieldset>

          <fieldset className="filter-group"><legend>Detalii</legend><label className="select-wrap"><span>Marcă</span><select name="brand" value={filters.brand} onChange={updateFilter}><option value="">Toate mărcile</option>{[...new Set(cars.map((car) => car.brand))].sort().map((brand) => <option key={brand}>{brand}</option>)}</select></label><label className="select-wrap"><span>Categorie</span><select name="category" value={filters.category} onChange={updateFilter}><option value="">Toate categoriile</option>{[...new Set(cars.map((car) => car.category))].sort().map((category) => <option key={category}>{category}</option>)}</select></label><div className="select-pair"><label className="select-wrap"><span>Combustibil</span><select name="fuel" value={filters.fuel} onChange={updateFilter}><option value="">Orice</option><option>Benzina</option><option>Diesel</option><option>Electric</option></select></label><label className="select-wrap"><span>Locuri min.</span><select name="seats" value={filters.seats} onChange={updateFilter}><option value="">Oricâte</option><option value="2">2+</option><option value="4">4+</option><option value="5">5+</option></select></label></div><div className="select-pair"><label className="select-wrap"><span>Transmisie</span><select name="transmission" value={filters.transmission} onChange={updateFilter}><option value="">Oricare</option><option>Automata</option><option>Manuala</option></select></label><label className="select-wrap"><span>An</span><select name="year" value={filters.year} onChange={updateFilter}><option value="">Oricare</option>{[...new Set(cars.map((car) => car.year))].sort((a, b) => b - a).map((year) => <option key={year}>{year}</option>)}</select></label></div></fieldset>
          <p className="filter-panel__footnote">{activeFilters ? `${activeFilters} filtre active` : 'Toate ofertele sunt afișate'}</p>
        </aside>

        <section className="catalog-results" aria-label="Oferte auto">
          <div className="results-toolbar"><p><strong>{filteredCars.length}</strong> {filteredCars.length === 1 ? 'mașină găsită' : 'mașini găsite'}</p><label className="sort-control"><span>Sortează după</span><select name="sort" value={filters.sort} onChange={updateFilter}><option value="recommended">Recomandate</option><option value="price-low">Preț crescător</option><option value="price-high">Preț descrescător</option><option value="rating">Rating</option><option value="year">Cele mai noi</option></select></label></div>
          {filteredCars.length ? <div className="cars-grid">{filteredCars.map((car) => <article className="car-card" key={car.id}>
            <div className="car-card__image-wrap"><Link className="car-card__image-link" to={`/auto/${car.id}`} aria-label={`Vezi ${car.brand} ${car.model}`}><img className="car-card__image" src={car.image} alt={`${car.brand} ${car.model}`} /></Link><span className="car-card__category">{car.category}</span><span className="car-card__availability"><span className="availability-dot" /> Disponibilă</span></div>
            <div className="car-card__body"><div className="car-card__title-row"><div><p className="car-card__make">{car.brand} · {car.year}</p><h2><Link className="car-card__model-link" to={`/auto/${car.id}`}>{car.model}</Link></h2></div><span className="rating"><span aria-hidden="true">★</span> {car.rating.toFixed(1)}</span></div>
              <div className="car-specs"><span>{car.seats} locuri</span><span>{car.fuel}</span><span>{car.transmission}</span></div>
              <div className="company-line"><span>{car.company}</span><span>★ {car.companyRating.toFixed(1)} <small>companie</small></span></div>
              <div className="car-card__bottom"><p className="car-price"><strong>€{car.price}</strong><span> / zi</span></p><Link className="details-button" to={`/auto/${car.id}`} aria-label={`Vezi detalii pentru ${car.brand} ${car.model}`}>Detalii <span aria-hidden="true">↗</span></Link></div>
            </div>
          </article>)}</div> : <div className="empty-state"><span aria-hidden="true">⌕</span><h2>Nicio ofertă pentru aceste filtre</h2><p>Încearcă un buget mai larg sau elimină câteva criterii.</p><button className="button-primary" type="button" onClick={() => setFilters(initialFilters)}>Șterge filtrele</button></div>}
        </section>
      </div>
    </main>
  );
};

export default Auto;
