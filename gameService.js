import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { db } from "./firebaseConfig.js";

export const GameService = {

  /* ========= LECTURE SIMPLE ========= */

  async getGames() {
    const snapshot = await getDocs(collection(db, "games"));
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  /* ========= LIVE UPDATE ========= */

  subscribeToGames(callback) {
    return onSnapshot(collection(db, "games"), snapshot => {
      const games = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(games);
    });
  },

  /* ========= AJOUT ========= */

  async addGame(game) {
    await addDoc(collection(db, "games"), game);
  },

  /* ========= UPDATE ========= */

  async updateGame(id, game) {
    await updateDoc(doc(db, "games", id), game);
  },

  /* ========= DELETE ========= */

  async deleteGame(id) {
    await deleteDoc(doc(db, "games", id));
  }

};
