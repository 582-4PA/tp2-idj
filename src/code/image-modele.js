import { collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore";
import { bd, collImages } from "./init";

// lire les dossiers
export async function lireUne(jour) {
    const idj = await getDoc(doc(bd, "images", jour));
    // Ajustez le tableau comme voulu et le retourner...
}

// modifier l'état Aime
// export async function modifier(idUtil, idDossier, infoDossier) {
//     // Utiliser updateDoc
//     const refDossier = doc(bd, collUtilisateurs, idUtil, collDossiers, idDossier);
//     await updateDoc(refDossier, infoDossier);
// }

// supprimer un commentaire
// export async function supprimer(idUtil, idDossier) {
//     const refDossier = doc(bd, collUtilisateurs, idUtil, collDossiers, idDossier);
//     await deleteDoc(refDossier);
// }