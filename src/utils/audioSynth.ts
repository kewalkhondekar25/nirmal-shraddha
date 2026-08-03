// Web Audio API generator for traditional Indian spiritual ambiance (Temple Bell, Om Drone, Flute Resonance)

let audioCtx: AudioContext | null = null;
let droneOsc: OscillatorNode | null = null;
let droneGain: GainNode | null = null;

export const playTempleBell = () => {
  try {
    const CtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!CtxClass) return;
    const ctx = new CtxClass();
    
    // Fundamental bell frequencies (Traditional South Asian Temple Bell chime)
    const frequencies = [432, 864, 1296, 2160];
    const now = ctx.currentTime;
    
    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      
      // Fast attack, slow exponential decay for metallic chime resonance
      const initialGain = 0.15 / (idx + 1);
      gain.gain.setValueAtTime(initialGain, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5 + idx * 0.5);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 4.5);
    });
  } catch (e) {
    console.warn('Audio playback error:', e);
  }
};

export const toggleOmDrone = (enable: boolean): boolean => {
  try {
    const CtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!CtxClass) return false;

    if (!enable) {
      if (droneOsc) {
        droneGain?.gain.setTargetAtTime(0, audioCtx?.currentTime || 0, 0.5);
        setTimeout(() => {
          droneOsc?.stop();
          droneOsc = null;
          audioCtx = null;
        }, 600);
      }
      return false;
    }

    if (droneOsc) return true; // Already playing

    audioCtx = new CtxClass();
    const now = audioCtx.currentTime;

    // Sacred 136.1 Hz (Cosmic Om Frequency / C#3 tuning)
    droneOsc = audioCtx.createOscillator();
    droneGain = audioCtx.createGain();

    droneOsc.type = 'sine';
    droneOsc.frequency.setValueAtTime(136.1, now);

    // Warm sub-harmonic octave
    const subOsc = audioCtx.createOscillator();
    const subGain = audioCtx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(68.05, now);
    subGain.gain.setValueAtTime(0.04, now);

    droneGain.gain.setValueAtTime(0.001, now);
    droneGain.gain.linearRampToValueAtTime(0.06, now + 1.5);

    droneOsc.connect(droneGain);
    subOsc.connect(subGain);
    subGain.connect(droneGain);
    droneGain.connect(audioCtx.destination);

    droneOsc.start(now);
    subOsc.start(now);

    return true;
  } catch (e) {
    console.warn('Om Drone error:', e);
    return false;
  }
};
