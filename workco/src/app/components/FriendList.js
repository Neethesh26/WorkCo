import { UserCardOffline, UserCardOnline } from "./userCard";

export default function FriendList() {
    return (
        <div class="grid grid-rows-1 gap-6 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4">
            <UserCardOnline userName="Zoltan" activity="Working on coursework" />
            <UserCardOnline userName="Fel Ong" activity="Legs @ the gym" />
            <UserCardOffline userName="Neethesh T." />
            <UserCardOffline userName="Aditya M." />
        </div>
    );
}