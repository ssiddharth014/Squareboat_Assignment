import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import { useSelector, useDispatch } from 'react-redux';
import {CompanyJobs} from '../actions/jobsAction'

export default function JobsPosted()
{
  const dispatch= useDispatch();
  const Jobs = useSelector((state) => state.companyJobs);
  const userSignin = useSelector(state => state.userSignin);
  const {  userInfo } = userSignin;
  const{loading,error,jobs}=Jobs;
    React.useEffect(()=>{
        
        dispatch(CompanyJobs(userInfo._id))

    },[])
    if(loading){return <>
        <div className="spinner-grow text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-secondary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-danger" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-light" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-dark" role="status">
      <span className="sr-only">Loading...</span>
    </div></>}

    return(
 <>
    <Header/>
    <div className="container-fluid mt-4" id="accordionExample">
        <div className="row d-flex justify-content-around">
            {jobs && jobs.length==0 ? (<h1 className="text-primary">No Jobs Posted yet</h1>) : (null)}
                {jobs && jobs.map((ann,index) => {
                    return ( <div key={index} className="col-lg-3 col-md-4 col-8  ml-2 mt-2 mb-2  text-dark newcard">
                               
                                {
                                ann.pic ? (
                                <> <img  src={ann.pic} height="100" width="100%"/><br/></>) :(
                                <> <img  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFRUXFxUYFhUYGBcXFxgaFxgWFxgVFx0YHSggGBolHRUXITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0rLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABCEAACAAQDBgMFBgUDAwQDAAABAgADESEEEjEFBkFRYXETIoEykaHB8AdCUrHR4RQjYnKCkqLxFUOyU5PC4hczVP/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACQRAAICAgICAgMBAQAAAAAAAAABAhEDMRIhQVEEEyJhcTKB/9oADAMBAAIRAxEAPwDYq0SLDEWJlWCKICHAQ9ViQS+f107xgkarEipDgIdGMNpCEIxRxG1ZatkDBn5A6d4DaXbCXmNNYzu2t5llnJLUu/wHWGzcRMZvOTSlMo0B1qfQU9YhxOzpZpW9FoBrc083e1u8c0vkrwMo+zI4zGz8QSbzSCLCvhrXT+6J9n7GZmq9zy4DsNBGrzLYBQoqAbDkfhakTCUEYFRrqOfGvSJ/bzLRaQzZ2zMo+UFpUocIh/i0IF6E1oaWtrxirOnt4iZdKX5VrpbjFFSFlILhYxn2sY7w8EJYN50xV/xXzt8VUesGtpbdVGyk05x5l9pe1TOnSkrUS5ZPrMNf/FU98VxtORGclVGPjkdhRckcjqsQagkEaEWMchRjGp2Pv3ipNFmEYhBwmE5x2mC/+rNG42PvXhMRQLM8KYf+3Not+St7Le8HpHj0KkK4JjRnJHvsyVSxFIiMqPKt294MXIoEmZpQIHhTPMh/pSt1NPwkRt8FvrhZhAmVkFhUMfNJPClR5lPPMPWJSxtaLxyp7CWJ2aj6rfnoYE4vYbC6GvQ6xp1uoZSGQ6MpDKexFoWSsIpNDuKZhXklTQggw5RGwn4ZWswBgVidkD7pp0MOsi8k3jfgEGGlYnn4Vl1EQ0iidiNETLEMxYtMI40oD2iRXQAVPcxhQeyxA6wRaSDXKakcKU9Re8U5iwTFSkKJCsdjGPWpOJBuw9Rp6jhF6XzFxzgaJXK0Sy8w81OOo/TjCKXsdxCYHMQ8/X78+8V5OIrbX84Hbb2tMlNLWUinMbs5yin4V4lvhDWCgyTSBu0tsy5I8xv+EXP7esZzbu8jCozBBpa7dq8OwvGWPizj5RlU/eOp60+ZhJTSHjjbDO197JjnKgpXRQCWb3XPwEOweIdas2HMuZSwp7Q6UsDEOyd32Rgwudc1fNXnWNb/AALlKVqRpHLkk56RZ41FA0YlVmAHWbWnKoFacgaCKz4wCZlLk56EmwoKWy+6/eLc8pKJViQzkHKfxCgqvImg90AJ+MKTc7APLygqPKCGBNRRte1eEcyVs55JljEbRUsaVAAYE+lBb8N9eleMXcJtV6CYyhUoCXJ5EjJf0pTW8YrFYyWrtMls1X8xD1HmvVaG5tSovCwG0XmIwMxfERCJUvytLmDzFkKt7LmpII5R0xx+ReTRudq42WRUALcENY9LCutozyY2dJKvMzZPMRmIBI0U0JqD34ExFs+WFlrOLMxCg+FWo8QmgNTwFhTmDwgPt/EMJlJhDGmguF45Rz0FTxikUmJK9hfETGmzEbMCWYKRYGv4j0uIw22sX4s+bM4M7Zf7R5U/2qsaFJgWXMnFiGWWSgqbFvIvCntOpp0jIgRfEqQtHY5HY5FQihQo7GMcixhMMXPClaa0qdco60huHkFzQe4anjxizLnZaZlrTMFtQ8mQ04XN+HwjBJlxSiXmAy8KC1SdcvEMoPtcYGzJrMasamOzZhY1NOwsAOAEMjACGw9pT5Ewfw81pZY3A9lv7lPlb1EeybOxbOi+KoLECrS7e9Sae4jtHn24Ww858V1qvCv5x6fs3BAEU05GFkk9jxclo40k0qvmHqCO4N4rOIJ7x4oSMOzHUC3fhSPPsHvhNW05ROX8XsTPeLN6j1iDxei6y+zUPLijiNnKdBQxY2ftfDz7S5gDH/tzPI3YcG9DFmahBoRQxP8AKJT8ZGefAstTTNQVHvELBYdWBZhU1Nawb07aRWmYepA0rxWotDxy+ycsXoAzsIc5CAmlPTjrFPFgV4VpemleNI0G0MPQZZRtxPE87wBnSyNRSLKSeiTi1splYUSERyGFPT5b0izKPKIAsSoaRCy9Epl1ittHZgnKFYmimooSL+kXJTgxYUQdg0ZRdzZVaiteprr3glhdhBYOZYcohfrQ/wBkirIwgXQRZVIeBDgIZKhG7A+8Wx/4iUQtM61K5rA11BIuK848zxezsRLcpNkzApBqxBYGttVsT+YvHstIrz2IiWX8VYYrk6PAvCdG8MDxAScwoTUVApz90WtnbuYl2zLKaWObjLTtW/wj2SdigOMZfaO8koPlBzmt6adqxFfKlLqKLR+KtyYFm7t4yYMyTFdq2zGhtatSDU94C4ndTG182HZjXUGXQ9bHXvG9kbxoTWlOkW22/KIrmHqaQv35IPVhfxos8m2/g5uHlBJoKtOYGhKnySh0JpVpgt/RGdjTb/7S8XGNT2UREp1oXbsauR6RmmHuj0sd8VZwTSUmkchQoUOKKOgQgIcTTvxPyH1++MOlTMp461saGvcQp84uan3cAOQ6RHCjGFF3Y2z2nzllrxN+g4xSj1H7LdhUQ4hhdvZ7Rgo2Gy9lrKlrLUWAEElwxWLWFlRPjWCoSYQojI7yYpm8h0/OMbjNlKbr5T8I020puZiYFzRAsNGRxmBddRUcxcRa2bvNiZNs/iSx9yZ5h2U1qvoYMTVgRjsGrcKdoO9i1WjQ4DezDTbPWQ39Xml+jAVHqIMXy1Bqp0ZSCp7EWjyvFYRl0uIbs/ac6Q1ZUxk5gaHupsYnLCnoeOaS2enMsVpyV1FYp7t7c/ilcOoWYlCStlYGoBpwNR8YIzpVIhJOLo6ItSVoGNhJfL84UWSOkKNzfs3CPoml4h/xt7zEn8U40dveYgQRYw+FZ2oqk8+Q7nhEm29Hakls6uLmfjb3xMdpTFFTNIHMm3xhLu1in1nSpI/pVpr06k5VB7ViOd9nGe7Yx2P9Uuo/87RWOCT2yE/lY1/mNlTEb5hNJruf6dPebQLxG/WKayNkHP2m+NvhE21fs+xMoFpZWco1yVD/AOk6+hJjMlQuto6I4oo5J55S8JfxFjF7WxExg7z5pI0o5HagFgfzjU7D35mM3gzJtW0VwAA/vFmjGTDbSg5m37/CO4bA1NVVmfgfZX9SYGTi16DhU1JNK/6eo4jbs1BXN62tS/KNXhXzS1Y/eVSfUAx5fjGcSTm1yNXuRT5xoN2toTfDUMxNABfpHJjycd9nf8nCnXFUG9q7CSaDr6EiMzO3SC6CNvh2ZhWhiYySeEUeJPuJyxzSj0zz3/o5XUesNfZiat7IBZj0W7fAGPQWwVeAjH/afTD4CYRQNNKyh/kav/sVx6wqwStDv5K4s8UxM8zHeYdXZnPdiWP5xyQhYhVGYm1OcRwT2auVS51Nl+Zj0H0ealYPmSypofroesNAgmSGswrX3xXxGDKiq+Yc+XT6/wCRYWisTTvxPyH1+7IUKCKKOwoUYxf2Hs1sROSWo1Ir0HGPoLZeCEuWstRYACMJ9lew8qGewu3s9o9IkawGMi3KSggFvBjPuD1gvjsUEQmPNNvbzojGhzt8BCjl6eKCp05wHxm05Se04gBP27NnVqaJxA4wCxMzM44jh9c4yiByNW21ZbaMIhnTgYy4N/WLWYjjBoFl6beBu0nA7xIk80JrQDjFXCSGxM9JQ1dgteQ4n0FT6QUgNm4+z7AFZLTm1mm39q1HxNfdGjmpFuRIWWiogoqgKB0AoIjmqI4ckuUrO7HHjGgcU6CFE5HaFCjEGBw5d1QG7EDt1jXYeWqDKooB8ep5mKeC3dKMrCcKqQfZtY94h302NiZ0vLhJqpUnOrEqWHJWFadqesXxQa2iefLGTST6FtLerCyDSZOGYfdWrH4QL/8AyThAdJvfL+8YOZuLtEE1wrHqHlEHrZ4tYL7PMe580pZQ5vMT8kLH4Rbj+zm5ekem7D3wwuIYLLm+Y6KwKse1dYym++wS2NZpdFV1VmoBUsahr9aA9yYK7tbgScMyzZreNNWhW1JaHmBqxHM+4GCO2j/MHOkSzNxj0dPxYxlkpoyOB3aRLtc8zc+8wZw2CRdABEsdzRwSbez2YqMdAneA1GXiSq96kH30WD2wMKTlX6AjNbUbNNlqfxVp2H/2j0PYGFyywT7R/LhFcUOVI4/lZONhWWoAAGghxPOBG8W8mHwSZp70J9mWLu3YcuptGTTFYralCAZOGNDl0LDQq9/NowI0IcGxEd+jydmwwe3ZU5ysk+JlZldtFUrYre5PSPNPtw2lmmyMODZFaaw6uSi/BW/1R6TsPYkrDJlQa0zMdWIAWp5mgEeO/abgcQcdMmzJZVHKrKY6FVUKNPU06wYglox2Gkl2C+/oOJi7iZlfKNBYCOy2EtWVbs1AbXA5CICad+J+Q+v3YXQ5XpbjxPyH1+9vDzf+IoCJkagqeEBoKdHNphQRQXOp+R6xQiUsTViKg6xxpJHA0+tYZCsjghsTZ5nzkljib9uMD49H+yzZoq05hfQRjI9J2bhhLlqiigAAiz4lLxQn7WkIcrTVU8iYy28+9q0ySXBHFx8oAxPvdvGKmWpqaXvpHmmLe5rp9Wh8/FKxJLHqeJgfi5gOhrGSM2ST55y8q6DpFbDG5hk16xIoosEUlst9eX7wx5hMRpEhX3QDEU+YcoWNf9mezavMxDCy+RP7mux9Ft/lGOcEmgFToOpj2bYOzBh8PLk8QKt1Zrsffb0ieaXGJXDDlIuMw4xG6wnXlbpELvTW0cB30MYQoXi9o7BsFE8raez82YThm55ptffGnweKSbLDowZTWjDjQ0PxEAhsNQaZR7uEGtn4Xw5YUCgqSB3jqxt3o5slV0ywDHGaOfWn1SI2ixEbNnU0jMbexElSDPmZKkhTVhXjTy9o0E8wHxmElziFmKCBcV5xPJorif5ANNo4D/8Ap/3zImGK2fxxC/8AuTP1grL3aw3BF90Spuph/wD019wjnr9HS5v2YOayPi3aU9ZSBcrZiV0BY1bS9Yt437QJiDwcLV30zm4HVQde5tGg3i3W8WWJMmULkGubJTsaEW6+6LGwNyJEgVmIGNqqPZ/yZrzPgv8ATFIxW2SnJtUjMbtbqT8TOGJxDeLW5L1Kt2NbgR6xh5QRQooKcAKD0ECJ+N4S1JppS9OgpYQJx87Em4ltrY55YI97Vhudd7AsV9aNlWIMbhEmqZcxFdG1DCo/5jO47el5MkNMkMZlxTMiyyQLVepC1NgL3tygVhN7p+Zpq5ZsjMcyGivLRaZwq0zTMpNQy5gdCF1Fk77OeSp0zC767KlYeeySkmiXcVmrlANSCqMb5eRIv2ucyU6+h1j6Dw+Jwe0pRAo4oMyMAJiVFRUcPiI863t+zuZJq8jzy7nLxXty/KGsRo8/pDZz1IHAaxJMlshIvUagi47j5/lFdyOVD8IICVZt68tBDVc/rDVlk9hrHGaAEteKtPZFeZF4ObK3neVIMsCnJxY0jLiL6+UCq1Y+ylK06kc+QjUGy0+PBzG5J4k1il4tjDnmlbPLA5+XKSOY4D0EQzpdLg1U6H5HkekEUjZobHCYQjAOjWLBFbRDLiYTIwSQLDZkwAQxpkQTGrGMaT7P9m+Pi1YiqShnPKv3B77/AOMeszBGZ+z7Zvg4UORR5pznnl0Qe6/+UaPxCdLxxZ53KjtwQqNkTj16RVmD/gwSyilfgTSvMdDA+fxtaI0WTKLIvWOxKW6xyAE10nEmJxNJrX61gavT3RIrNwBrypHWpM5HFBGXOAF4imLaptXQcYWHRifMtPUX9NYlaRXVvdFSTBWKeAG1MRloK0ZiKdhcnt+sbJsAh1rAfbex8OMszKQcwBIJJNbAXPlFeUJOLaKY5JNWUsBiGa1CT0jQ4XDHVj6QzApLUAIB6Rb8SEhBLZSc70PMQzgD5Sdde0MxGJC9zp+sDcVjwgJGvEw0pJAhBvRBtWVLl+yxB98C6TmqQFYcgwB/3UiDF40G5N+sV5m1EQqQ4uKrWxNDQkcxW0R2dnGlvsi2ji50tiHkvkpQkrmXS4JFRkue8Z/aOEWY3jS3cPrRWozUAyqjk/y9Oo6Ropm1x+PXrGbxuzz5pko+atSlaKe3I/DtDRlT6EyY7X5dk8naTeJmOXDTFNWnSiyyyaVWXPoc5etTlA1apQgkjebH3yCjw8YVVlArOFpb1NMyjUqKgFqUrWyiPKv+qiYFSerK6sVEwXmIHp5RLNA446q3msRSkGFmTZTFSpmSwTQkCYWOUATWcj+TMC6geGy6sbX6jzX0+j0LenceRigWUBJnAiwPu0/LpHkG8O7M7DMRMQ0/EB8SB+YjYbB3gmYZQ0iZ48sAhsMa1zUDMyvlo+Qm7oDmqKqB5o3ey9qYXaMojLWlmlvZlJFRlPGovUcPdG0bpnzw6sBStuHL0iIx6nvZ9nLJWZh/MupSn5gfmPcI83xWCZTQqQ3I/I/e/PvDCtEGHNGW1fMLc76Re2fOCTmLGo8wzHvqfdA0iLIbxNSA/MmgbuTo3XjGAGsYgn5VU2Uks/Af0jmYEYoqtUQlhUEseYqKDpc3g7gNmTZ0oJLKhRZm5niBTh14xHicDh8L7Z8aZ+DRR/d+kCxqBGD2a8ypAooFSx0EVKRoMRvI7yjKEtEUilVqIB5PqsazNehixIohuSkdcxgDHaLewtn/AMRPlyuBNWPJRdj7vziiTG6+zzAUR55+95E7A1c++g/xMCcuMWxsceUkjeq4FKaadP2jkxTcjWwIrY1vTtaKsvjeh4cjzrypDWn8Db59O0ed/T069Er4qv1SpiN549IrzBT61iu82kA1FguvSFFPOPoRyCA9CWYqivEA94auLAC8yKxnpu1SwmUAAqFrxMdbF0KH+mn1749KjzTRHEw9JtoB/wAdpU/GHHHco1GDn8QIH7c80iYOSk+q+YflFVcSYkMwEUPEUjNBTp2Utk46iAD3wTOLAuT6RgcBPaWSvFSVv0JHygsmIJ1McdtHocFLsK4jH1NdSYG43EWqYheYKxHOYGEbKxikZrbJeeHly2FVo2U+XNr5QTavEVsaGM9gjiDWWyPMQkZ5RqLjRgT/APrYfi+BFo9Bm4eSBXKK+ghpxEtV8oEVjl4qkiOT4/OXJsx6bqzKhhMyjm12HS1vX4CLGOEzCy0ZnDVNLaHW5qfKbdj04925t0i1b8h84Cfxvjkia1xdATllseTt921eQ6jWKRUpdyJTcMXUH2FBttHDKyEPQAThlWbLHJCbmtaZagUrcVJHUlthkWZUTJc5coUKyymUEgHEggEtUEhReoqHteXYeDnTpqymw+cDy1ZAvg2pWVWzgChyMCp1NKloPjcydLIdsShck+JVS3iJwSYGJU1FqEEDrQRS1E5qlN2kZ7CSwyidIzCYrgAOc1MvsnCBqeKwyk5TVl8tATeJ2xVSpnFpM1aeEygiZc+Z3VQClalvEoHPJ9RLO2DOxU9gqeExBrLP8yUqC+WQwAC00CNk6G9A/HYCYrKuJw03Kf5ZmS6TZ7DQGYQGRjcAD2lAFCaXNoDjJeDX7G398MrKxdWWgC4pdJl6eJlUUC6CxJBNwDUA1vJuhh8WpagVjXzDQnjWnHqL866R5hLOIlGiZDKUuKIQ2HUWDTPErZ+BdirramoEEN3ttHDMWws0zJYBrhiDWaaVIQkCoViTnAD5dUOowLAG8m6s/CtR1JXgwvUdDo4+I6RnGl0uPr9Oxj6D2JvBhdoIZdBny5mkte1QM6H7ygkCooQdaGMlvZ9nBvMwtTzT73pwcdNe8GwNHmWE2pMlghGK1FCRaK7Lxb67xYxuCKHK65GFr6GnKvsnofhFN1I1g0Cx8xuWn1aEo5xxXA0hrc+H1YxjD7Rx4jEPMYwpUssyqoqzEKBzJNAPeY9ewOEWTKSUNEUL3P3m9TU+sYXcXAZpxnNpKFV6u1Qnu8x9BG/wMpprZByJJOlu0c2d21FHX8aNJzYxj9frEDNT6tFzE7PmJWqkjmL/AJQOc8j9fKOZprZ1qSehNOI09xhpnA20/KIn+v2/SK8xj3/Md4wGT3jkUzN6woNAsIYfHZZdTerVp2hx2k0w3sOAgPiZwGVa6C8cTECooY9A801GGnywAWNTy1ib/qCjpGMm7XWWaFhe/OK0zeUcKt2FPzjWY33/AFMcIeuOFKkgDvaPM528c0+yoHxi3gFOKszlj+Em3cDSBYS9tbeCWk9wozqSDmUgipFx1vX3x3D7xSjZg6nkVr/41i5ht0M2ogxh90UAuPX5RNxRaOSS8gcbdkf+p8G/SIZm8UoaBm7KfnSNKN1pS/dqeX1pEi7tJ+EDtC8EU+5mKxW284pLltX+qw+ET7O2HPnn+YxCngLD3cY3GG3clLfKILScIBoIKikJLI3tmawu5MgLTKGrrmFQf07i4gTh/swDT6+KVw98w1mA8EU6Ef1aimlbx6PJk17RK7BRYekHlQnG9gjD4ASUEqQhVV8ouTblU3iDF7OYms2YFXktSx6XsPjBdXIqSf2gRi5hdjTSIyOvG346HNi5ctcssBV+J6seJ6wA/i5k98klS1D5m0Rf7jp6awQOzldcs0kL0JBPS14ttjEloJctQiAWAsPrrC72PrQAxWySmceHIfODValVcitA62DCtwdQbggxmxsx1q8uVMWcjKMsw51lgHyPhtBOYahTUragY+YFdt7fRam5Cm7fdB5V59NYAzNtfxJ8FFzNMsqkgAtwPmIuDfnFsbl/w580YPz2Ol4otL/nO0nzZlnUImTnUgAOEo80C5zaoeLE0ja7F34aQJcvGN4wepWcnmCoODtbO4INgMwFKippGHxmIlTUAnO0yYlFbFAgkKbLLyMQ05VNfMSGvyABWKmNhlEtFBw75ZniuAVxFNHU/wDbpU0VSHFLkmLnGes7X2DhdoShMUq2YeWclDXv+IfEdI8l3n3Mn4U1y55fBhp2B+6eh+MHNmbUnyXU4Z8pZTlwJa63rmKteZnNW1Wb5q3ArG92PvPhsXWQxUTqBZko+ZC1PNLViAsyhBFuRgB2fPjy/rj6iGKaR7PvF9msqa4aS/g1PmFC1OqX+B940gJvL9mBVc+EYvQXlvTMSBcqRQVPK3yg2LxPNTbTT6sYXU+g+Z6RNNwzS2KupVhYowIPqDFrYWz/ABsQit7Fc0w8lW7A96U9YJl30bXYOB8LDIDZ3/mP3cDKD2UD3mNlu5hskvMfae/Zfuj5+sAcJJM2aBwJq3QDUfKNcDHLD8pOR2ZPxioIlLRVxOElv7SAnnofeLx2dNygn87RSxO1UllQ9QSK2vTvx+HCL1ZBXfRUxe76H2HI6G49OI+MBMZsmcn3cw5rc+7X4RqpWLR/ZYHsb+7hCZom8UWUWWS2YItTWnrYxyNyYUJ9P7G+79Hkk/aKjjUxSfGTG0NO36x2ThovJhqaCLOaRKONsGy8MSevxi3KwFYJSsKeQi7IkD61H6xKWVlo4UCpeB4UixKwLIQ6WIp+3YwYWSG4X58/0MTpKpb69InzZVQiH92N4VmAS5tBM0zWAJ5HgD10Mavwrco8wxODr5ksw+PQiNLuzvMRSVPqCNCbmn/yHxEUhkvZCeKu0atJIFoeJUSSZiuMymo+vdElIqRIhLjoWJKQwm8ZhWx5NNIqzTTWJHmUihiZ0Sky0EMxU+thFKc+UBeesPd4oT59Wr6RI6EqHz3MAttbKnYhQkuZ4Y4n5WFx6iCrtxhgn5b1jLpjtWqYIwO5EhF/mzGmk6j2UPKoBqacDWO4bd3CS5hZJZVh7JzMcp/Eta0YcDwiOfvbJJYK+gqTQ07V4mM1jd6ZrE+EABejEGtOt6Dv7+layM5nLDFaD+0MHgxVpoo6ggO+dwzU8nihTWYO5rTUkWgXIn4yXML+Ur7Rmv5sPlBoKkACxsFAzrooUxn5M/xW/nTCDwc+ZR0ZQKgf1C45HgUxzNJR8MlZnjFC0z2hNIupw63qOGcVY6W0i0U0uzmnKLdxVEWJwkmbNJw7zCMxORxWaeJaXVv5vOhIfodY0u6u603HAviQ6IKFZ4OSZMKn7wI8wpWkwgN1PAnuhuK1UxGNN1IZJXEEUoXOrEUFBoKR6C82vaDYqRKHoAoqQABU3JpHKxCWhjTAASTQDUmFGBe827kjGIRMUB6eWYPaHKvMdD6UjzHdzB+ErkjzvRdagIpqdPxGnYKOca3eLezMTKkXBsW51+X5xW2Js4OyrTqegGv11iWSb/yi+LGv9MObu4PJLznV9Oi8P190FCYmEqlhpFSdOChmPsrx59IpGNKiUpcnY4mB2P2akw1NQ3MH5G0WpWKR/ZYHpx9xvHWhgdpmTxuBMsM4cFVNK6GukRyNtTV+9mH9V/jrB7aezxNTLUqK1tSlaUuIzWM2DNS60cdLH3GHik1s0s0ltWgmu8Y4yzXof2hRmWVwaFWB6gwob62L92P0ylIlDj69IuJKoRXhx6HjEOAmCYKizDUQSlJw+u0cEjtjVdHFWLcjDZgbafnw7C2sPw2HBsTTlx716DnFudMy0oL97C2gtQoRChsqS5Z7jnE6y+Bh8hv+IsBOlvyhQ2RCTT5GFOwSvqKMNGFjFlbdoey2qNPq0Y1lvY+2WQiXONGsFmfdbkr8j1jWSZwboRqOX6jrGHdFYUYQ/A7TeR5X86j2GrQr0J4rFseXwyM8XlG3MVy2sSYWeHQOK0IqAdY7lXlF2rIJ0Dp80k0AMDp828G5+zVoTWnPj+cBsbspyPK4J4Vt6GIyxyOiOWIPnYithpziuzgQ3Ey2le2KcoGYraCotWNPn2hOJXktlzFYmgqSAIzW0drNN8kuy8TxP7RXnzXxLcQg0X5nrGh2RsOlCRFYwojPI3ozGI2C7iunWlv8qfnEezsFKws+WcUGJ9oBLqo/ET9/+0evKPVsJgwBpFfamwJU5CjICuuXSh/Eh+6fgYomc7S2Zzam5Mqcon4JpfmvkJPhNXipX2T007Rpd0d3UwkoBm8V65qkWUkUPhg+yOZ4xLsfZaYeUJctcqAk0JqSTqzGCQaNZqLRmVjjWMMVqD69x6QO2ztqXh1zOamnlStz+3WMYu4vGJKQvMagHx6DmYwO2t4JmKbIlVl8ufU8z00EBNq7Ym4qZVjReAGgHIfrqYI7PlKALUiOSfhHRjx+WTYLZ4H68Y2GwMLlTNS7adh9flATZ2HLuF9/YamNegoIGGNu2HNPqh4iDGYVZi5TUDW1olrHCY6Dmsy+P2UUDMrAhbmtiP3ithtozRocw5G/pXWNJtDBiYhSuWpBJA5c+fCM/O3fncKZRplv8NaxSKTXbBLNJPtWi0m11++jJ1pUfrFlXVrqwPY1jJzmaWxVhXmDxiGZMykFSRUVB0NPTtGeNoMZ456df02BSFGVG15w+/8AAH5QoWh/qZjkco2ZTGn2diRMUPQ0Bow4/VxChRCa6saD7oMlgVAJqdVtSo0XtSmkNPmNTr9fVIUKIMsRVIYUi9h5lb84UKAFkxW3T8usJWpTrChRjIeb3HrHZEnOwTmafrChQYq2jN0mbFAFAAFAAAB0EcebT6+uYjkKO44TpnlwV05mB8yeK0A0484UKMYF7VYMpDaUjzJEec9WOhsOAhQoWQ8TX7G2WFAjTYeSBChQqCyyDDgY5CggHZo6p417/L0rwhQowAHvJvEuFWgGZyKgHQD8R/SPOZuImYhy8xia8/rTpHIUTm6RXGk2FsLhwItKlI5CjmOo2G7WHpLznVrDoB+8GCYUKOyCqKOKbuTGTHoIHY/anhsFy1tU8PdChQ6NBJvslwW0EmWWtaaEfQi3LnlesdhRgSVMr4/Dy2FZiKzHSo07GMzj93QalHvyb9RpChQVJrRNwUtgSZsacCRlH+pf1hQoUV+xkvqR/9k=" height="170" width="100%"/><br/></>)
                                }
                                                            
                                
                            <h4 className="text-center text-primary">

                            <em> {ann.title}</em>
                                
                            </h4>  
                            <h6 className=" text-center text-success ">

                                
                            Applications <span className="ml-1">{ann.applications.length}</span>
                            </h6>
                           <div className="d-flex justify-content-center">
                               <Link to={`/JobDetails/${ann._id}/myJobs`}>
                               <button className="btn btnColor text-white rounded-pill mb-2" >View Details</button>
                               </Link>
                            
                            </div>
                          
                           
                        </div>


                    )
                })
                }
            </div>




        </div>
        </>
    )
}







    