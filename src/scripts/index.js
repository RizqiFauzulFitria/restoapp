import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/card-item';
import app from './views/app';

window.addEventListener('DOMContentLoaded', () => {
  app();
});
