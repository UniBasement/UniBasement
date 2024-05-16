'use client';
import useExam from '@/api/useExam';
import useQuestions from '@/api/useQuestions';
import requireAuth from '@/app/requireAuth';
import Question from '@/components/Exams/Question';
import Title from '@/components/Title';
import usePostQuestion from '@/api/usePostQuestion';
import useUpdateQuestions from '@/api/useUpdateQuestions';
import { Question as IQuestion } from '@/types';

function sortQuestionsById(a: IQuestion, b: IQuestion) {
    if (a.questionId < b.questionId) {
        return -1;
    } else if (a.questionId > b.questionId) {
        return 1;
    } else {
        return 0;
    }
}

function Exam({ params }: { params: { courseCode: string; examId: number } }) {
    const { exam, isLoading, isError } = useExam(params.examId);
    const {
        questions,
        isLoading: isLoadingQuestions,
        isError: isErrorQuestions,
    } = useQuestions(params.examId);

    const { postQuestion } = usePostQuestion(params.examId);
    const { updateQuestionContent } = useUpdateQuestions(params.examId);

    return (
        <main>
            <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center">
                {isLoadingQuestions && <p>Loading...</p>}
                {!isLoading && !isError && (
                    <>
                        <Title title={`${params.courseCode} ${exam?.examType}`}/>
                        <div className="flex items-center justify-center pb-8 text-3xl">
                            {`${exam?.examYear} Semester ${exam?.examSemester}`}
                        </div>
                    </>
                )}
                <div className="grid grid-cols-1 gap-4 w-full">
                    {!isErrorQuestions && !isLoadingQuestions && questions?.sort(sortQuestionsById)?.map(question => (
                        <Question
                            key={question.questionId}
                            question={question}
                            updateQuestionContent={updateQuestionContent}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default requireAuth(Exam);
