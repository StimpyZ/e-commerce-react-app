import './Form.css'

export function Form () {
  return (
    <>
      <section className='news'>
        <h1>Contact us</h1>
        <form className='form'>
          <input type='email' placeholder='your@email.com' />
          <button type='submit'>Send</button>
        </form>
      </section>
      <footer className='footer'>
        <div className='about'>
          <p>About</p>
          <p>Store Location</p>
          <p>FAQs</p>
          <p>News</p>
          <p>Careers</p>
        </div>
        <p>Made by stimp</p>
      </footer>
    </>
  )
}
