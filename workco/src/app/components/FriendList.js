import { UserCardOffline, UserCardOnline } from "./userCard";

export default function FriendList() {
    return (
        <div class="grid grid-rows-1 gap-6 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4">
            <UserCardOnline userName="Aditya M." activity="all nighter at KCL"/>
            <UserCardOnline userName="Zoltan" activity="Online" />
            <UserCardOffline userName="Felicia"  />
            <UserCardOffline userName="Neethesh T." />
        </div>
    );
}