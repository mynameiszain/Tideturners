import { teamMembersData } from '../api/api';
import MeetCrew from '../assets/TTsite/TTsite_MTC_text.png'
import TeamMember from './TeamMember';


const MeetTeam = () => {
  return (
    <>
    <section className='pb-[120px] px-5'>
        <div className='container max-w-7xl mx-auto'>
            <div className='flex flex-col'>
                <div className='py-10'>
                    <img width={960} className='mx-auto' src={MeetCrew} alt="Meet Crew" />
                </div>

                {/* Teams Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center">
                    {
                        teamMembersData.map((member, index) => (
                            <TeamMember key={member.name} image={member.image} name={member.name} role={member.role} experience={member.experience} funFact={member.funFact} />
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default MeetTeam