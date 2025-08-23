import Avatar from "./Avatar.tsx";
import {useDispatch} from "react-redux";
import {changeStats} from "../features/stats/statsSlice.ts";
import {useAppSelector} from "../app/hooks.ts";
import {followers, following} from "../utils/constants.ts";

const Stats = () => {
    const stats = useAppSelector(state => state.stats);
    const {name} = useAppSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(changeStats(followers, 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats(followers, -1));
                    }}
                >Followers: {stats[followers]}</div>
                <div
                    onClick={() => dispatch(changeStats(following, 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats(following, -1));
                    }}
                >Following: {stats[following]}</div>
            </div>
        </div>
    );
};

export default Stats;