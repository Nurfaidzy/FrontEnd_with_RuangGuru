import './App.css';
import React, {useState } from 'react';

function App() {
  // TODO: answer here
  return (
    <>
    <RandomEmoji />
    </>

  )
}

function RandomEmoji() {
  // TODO: answer here
  const [emoji, setEmoji] = useState(randomEmoji);
  return (
    <div className="wrapper">
      <h1 className='emoji' data-testid="emoji">{emoji}</h1>
      <button 
        onClick={() => setEmoji(randomEmoji())}
        className="button"
        >Acak emoji</button>
    </div>
  );
}

function acakemoji() {
  
}

export function randomEmoji() {
  const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚',  '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡', '🥳', '🥴', '🥺', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'
];
// TODO: answer here
  const acak = emojis [Math.floor(Math.random() * emojis.length)];
  return acak;

};

export default App;