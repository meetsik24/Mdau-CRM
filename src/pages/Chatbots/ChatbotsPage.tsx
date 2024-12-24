import BotsList from '../../components/BotsList';
import BotMetrics from '../../components/BotMetrics';
import NewBotButton from '../../components/NewBotButton';

export default function ChatbotsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Chatbots</h1>
          <p className="text-gray-600">Manage your automated chat assistants</p>
        </div>
        <NewBotButton />
      </div>
      <BotMetrics />
      <BotsList />
    </div>
  );
}